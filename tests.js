// 3 vertices: Combinations = 2 (CW, CCW)
    /*  NOTE: Origin is in top left!
            o - - - - - >+X
            | A---->B
               \    |
            |   \   |
                 \  |
            |     \ |
                   \v
            |       C
            v
            +Y
    */
    var Hull1Convex = [ 0, 1, 2 ];
    var Test1VertXY = // CW Test 
    [
        1, 1, // A v0
        4, 1, // B v1
        4, 4  // C v2
    ];


    /*  NOTE: Origin is in top left!
            o - - - - - >+X
            | A<----B
               \    ^
            |   \   |
                 \  |
            |     \ |
                   \v
            |       C
    */
    var Hull2Convex = [ 0, 1, 2 ];
    var Test2VertXY = // CCW Test
    [
        1, 1, // A v0
        4, 4, // C v1
        4, 1  // B v2
    ];


// 4 vertices: Combinations = 24*2 (24 CW, 24 CCW)
    /*  NOTE: Origin is in top left!
            o - - - - - >+X
            | A---->B
               \    |
            |   \   |
                 \  |
            |     \ |
                   \v
            | D     C
    */
    var Hull3Convex = [ 0, 1, 2, 3 ];
    var Test3VertXY = // CW Outside Left Test
    [
        1, 1, // A v0
        4, 1, // B v1
        4, 4, // C v2
        1, 4  // D v3
    ];


    /*  NOTE: Origin is in top left!
            o - - - - - >+X
            | A---->B
              ^    / 
            | |   /  
              |  /   
            | | /    
              |/     
            | D     C
    */
    var Hull4Convex = [ 0, 1, 3, 2 ];
    var Test4VertXY = // CW Outside Right Test
    [
        1, 1, // A v0
        4, 1, // B v1
        1, 4, // D v2
        4, 4  // C v3
    ];


// 5 vertices
    /*  NOTE: Origin is in top left!
            o - - - - - >+X
            | A---->B
              ^    / 
            | | E /  
              |  /   
            | | /    
              |/     
            | D     C
    */
    var Hull5Convex = [ 0, 1, 3, 2 ];
    var Test5VertXY = // CW Outside Right Test
    [
        1, 1, // A v0
        4, 1, // B v1
        1, 4, // D v2
        4, 4  // C v3
        2, 2, // E v4
    ];


    /*  NOTE: Origin is in top left!
            o - - - - - >+X
            | A---->B
              ^    / 
            | | E /  
              |  /   
            | | /    
              |/     
            | D     C
    */
    var Hull5Convex = [ 0, 1, 4, 2 ];
    var Test5VertXY = // CW Outside Right Test
    [
        1, 1, // A v0
        4, 1, // B v1
        1, 4, // D v2
        2, 2, // E v3
        4, 4  // C v4
    ];



