"use strict";

/*
        Y
        ^
     E<D|A>B
      \^| \v
       F|  C
    <---+---->X

CW < 0
       A // 1, 3
       B // 3, 3
       C // 3, 1
CCW > 0
    [
        -1, 2, // D
        -2, 2, // E
        -1, 1  // F
    ];
*/

var verts =
[
     1, 3, // A
     3, 3, // B
     3, 1, // C

     1, 3, // C
     3, 1, // A
     3, 3, // B

    -1, 2, // v4
    -2, 2, // v5
    -1, 1  // v6
];
var tri;


// ___ Utility ___

    // Fast point in polygon: https://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    function IsPointInPoly( p, polygon )
    {
        var isInside = false;
        var i = 0, n = polygon.length, j = n-1;

        for (; i < polygon.length; j = i++)
        {
            if ( ((polygon[i].y > p.y) != (polygon[j].y > p.y))
            && p.x < ((polygon[j].x - polygon[i].x) * (p.y - polygon[i].y)
                    / (polygon[j].y - polygon[i].y) + (      polygon[i].x)))
                isInside = !isInside;
        }

        return isInside;
    }


// ___ Vector ___


    /** Create a point from x and y coordinates.
        @return {Point}
    */
    function vec2_make( x0, y0 )
    {
        return { x: x0, y: y0 };
    }

    /** Calculates the distance squared between two points
        @return {Number}
    */
    function vec2_distSquared( a, b )
    {
        var    dx = b.x - a.x;
        var    dy = b.y - a.y;
        var    d  = dx*dx + dy*dy;
        return d;
    }

    /** Return vector from point `a` to point `b`.
        @param {Point} a
        @param {Point} b
        @return {Vec2} b-a
    */
    function vec2_sub( a, b )
    {
        var    d = { x: b.x - a.x, y: b.y - a.y };
        return d;
    }

    /** Calculate the 2D Cross Product (scalar)
        The cross product is only defined for dimensions 3 and 7.
        We project/extend 2D vectors to lay in the XY plane.

            <1,0> x <0,1> = <0,0,1>

        The cross product bivector comes out/into the Z plane when we
        take the determinant of:

            |i  j  k|
            |Ax Ay 0|
            |Bx By 0|

           = (Ay*0-By*0) - (Ax*0-Bx*0) + (Ax*By-Bx*Ay)
           = AxBy - AyBx

        We only care about the scalar as the sign will tell use the winding order:
            Sign   Winding
            -      CW
            +      CCW

        Technically this is the exterior product: a^b
        https://en.wikipedia.org/wiki/Exterior_algebra
    */
    function vec2_cross( a, b )
    {
        var    z = a.x*b.y - a.y*b.x;
        return z;
    }

    /** Given any triangle vertex points in any order determine the winding order.
        @param  {Tri} p1 - Vertex point #1
        @param  {Tri} p2 - Vertex point #2
        @param  {Tri} p3 - Vertex point #3
        @return {Boolean} Returns true if Clockwise, false if Counter-Clockwise
        @example Given 3 points, p1, p2, and p3:

                    _U
              Y     /|
              ^    2
              |   /|
              |  / |
              | 1--3-->V
              |
            <-+------>X
              |
              v

        The winding order will be determined by the cross product of:
        Specifically, the sign of cross product:

            vec2 U = p2 - p1
            vec2 V = p3 - p1
            scalar = U x V   // 2D cross product
            if (scaler < 0)
                CW
            else
                CCW

        A more informative way to determine the winding is
        to take the determinant of the matrix

            [Ax Ay 1]
            [Bx By 1]
            [Cx Cy 1]

        For example:
            v1 = <1,1>
            v2 = <2,2>
            v3 = <2,1>
            U  = <2-1,2-1> = <1,1>
            V  = <2-1,1-1> = <1,0>
            UxV= 1*0-1*1   = -1
            -1 < 0 === CW
        NOTE: Assumes the origin is in top left!
        If you want to set the Javascript origin to the bottom right like OpenGL:
            var canvas  = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.translate(0, canvas.height);
            context.scale(1, -1);
    */
    function IsWindingClockwise2( p1, p2, p3 )
    {
        var     u = vec2_sub  ( p1, p2 );
        var     v = vec2_sub  ( p1, p3 );
        var     z = vec2_cross(  u,  v );

console.log( "  p1: < %d, %d >", p1.x, p1.y );
console.log( "  p2: < %d, %d >", p2.x, p2.y );
console.log( "  p3: < %d, %d >", p3.x, p3.y );

console.log( "  u.x: %d  u.y: %d", u.x, u.y );
console.log( "  v.x: %d  v.y: %d", v.x, v.y );
console.log( "  UxV: %d"         , z        );

        return (z < 0); // Origin top    left (RHCS) +Z out of screen
      //return (z > 0); // Origin bottom left (RHCS) +Z into   screen
    }

    /**
        @param {Number} i - index into vertex array
        @param {Number} j - index into vertex array
        @param {Number} k - index into vertex array
        @return {Boolean} Returns true if Clockwise, false if Counter-Clockwise
    */
    function IsTriWindingClockwise2( i, j, k )
    {
        return IsWindingClockwise2(
            gaVertex[ i ],
            gaVertex[ j ],
            gaVertex[ k ]
        );
    }


function make_tri()
{
    tri = [];
    var n = verts.length;
    for( var i = 0; i < n; i++ )
    {
        var p = { x: verts[i*2+0], y: verts[i*2+1] };
        tri.push( p );
    }
}

function main()
{
    make_tri();

    var t = [ "FAIL", "pass" ];
    var isCW, pass;

    isCW = IsWindingClockwise2( tri[0], tri[1], tri[2] );
    pass = (isCW === true)|0;   
    console.log( "CW: %d", (isCW|0) );
    console.log( "%s", t[ pass ] );

    isCW = IsWindingClockwise2( tri[3], tri[4], tri[5] );
    pass = (isCW === false)|0;   
    console.log( "CW: %d", (isCW|0) );
    console.log( "%s", t[ pass ] );

/*
    var s = vec_make( 1, 0 );
    var t = vec_make( 0, 1 );
    var c = vec_cross( s, t );
    var p = (c == 0);
    console.log( "Cross Prod: %d", c );

    s = vec_make( -1,  0 );
    t = vec_make(  0, -1 );
    c = vec_cross( s, t );
    console.log( "Cross Prod: %d", c );
*/
}

main();

