"use strict";

/*
    Y
    ^
 5<4|1-2
  \^| \|
   6|  3
<---+---->X

CW < 0
    { x:1, y:3},
    { x:3, y:3},
    { x:3, y:1}

CCW > 0
    [
        -1, 2,
        -2, 2,
        -1, 1
    ];

*/

var verts =
[
    1, 3, // v1
    3, 3, // v2
    3, 1, // v3

    1, 3, // v1
    3, 1, // v3
    3, 3, // v2

    -1, 2, // v4
    -2, 2, // v5
    -1, 1  // v6
];
var tri;

function vec_make( x, y )
{
    return { x: x, y: y };
}

function vec_sub( a, b )
{
    var d = { x: b.x - a.x, y: b.y - a.y };
    return d;
}

/*
   Technically the cross product is only defined in dimensions 3 and 7.
   Projecting a 3D vector in the XY plane returns a vector coming out into the Z plane.

   <1,0> x <0,1> = <0,0,1>

   |i  j  k|
   |Ax Ay 0|
   |Bx By 0|

   = (Ay*0-By*0) - (Ax*0-Bx*0) + (Ax*By-Bx*Ay)
   = AxBy - AyBx

   Technically this is the exterior product: a^b
   https://en.wikipedia.org/wiki/Exterior_algebra
*/
function vec_cross( a, b )
{
    var z = a.x*b.y - a.y*b.x;
    return z;
}

// Sign of cross product
/*
   A more informative way to determine the winding is
   to take the determinant of the matrix

   [Ax Ay 1]
   [Bx By 1]
   [Cx Cy 1]
*/
function IsWindingClockwise( p1, p2, p3 )
{
    var u = vec_sub( p1, p2 );
    var v = vec_sub( p1, p3 );
    var z = vec_cross( u, v );

    console.log( "  p1: < %d, %d >", p1.x, p1.y );
    console.log( "  p2: < %d, %d >", p2.x, p2.y );
    console.log( "  p3: < %d, %d >", p3.x, p3.y );

    console.log( "  u.x: %d  u.y: %d", u.x, u.y );
    console.log( "  v.x: %d  v.y: %d", v.x, v.y );
    console.log( "  UxV: %d"         , z        );
    return (z < 0);
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

    isCW = IsWindingClockwise( tri[0], tri[1], tri[2] );
    pass = (isCW === true)|0;   
    console.log( "CW: %d", (isCW|0) );
    console.log( "%s", t[ pass ] );

    isCW = IsWindingClockwise( tri[3], tri[4], tri[5] );
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

