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


// ======================================================================
function tests()
{
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
            v
            +Y
    */
    var Hull2Convex = [ 0, 1, 2 ];
    var Test2VertXY = // CCW Test
    [
        1, 1, // A v0
        4, 4, // C v1
        4, 1  // B v2
    ];


// 4 vertices: Combinations = 24*2 = (24 CW, 24 CCW)
    /*  NOTE: Origin is in top left!
            o - - - - - >+X

            | A---->B
               \    |
            |   \   |
                 \  |
            |     \ |
                   \v
            | D     C
            v
            +Y
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
            v
            +Y
    */
    var Hull4Convex = [ 0, 1, 3, 2 ];
    var Test4VertXY = // CW Outside Right Test
    [
        1, 1, // A v0
        4, 1, // B v1
        1, 4, // D v2
        4, 4  // C v3
    ];


    /*  NOTE: Origin is in top left!
            o - - - - - >+X

            | A<----B
               \    ^
            |   \   |
                 \  |
            |     \ |
                   \|
            | D     C
            v
            +Y
    */
    var Hull5Convex = [ 0, 3, 1, 2 ];
    var Test5VertXY = // CCW Outside Left Test
    [
        1, 1, // A v0
        4, 4, // C v1
        4, 1, // B v2
        1, 4  // D v3
    ];

    /*  NOTE: Origin is in top left!
            o - - - - - >+X

            | A<----B
              |    / 
            | |   /  
              |  /   
            | | /    
              v/     
            | D     C
            v
            +Y
    */
    var Hull6Convex = [ 0, 1, 3, 2 ];
    var Test6VertXY = // CCW Outside Right Test
    [
        1, 1, // A v0
        1, 4, // D v1
        4, 1, // B v2
        4, 4  // C v3
    ];


// 4 vertices all combinations
    /*  Technically we have 24 combinations but #6..#23 have the exact same winding order as #0..#5
        i.e. #0, #9, #16, #20.
    */
    // Vertex Index into Test3VertXY // Legend: <- "Rotate Left // "Rotate Right" ->
    var Test3_00_Index  = [ 0, 1, 2, 3 ], Hull3_00_Convex = [ 0, 1, 2, 3 ]; // # 0 ABCD:  9 <- -> 18
    var Test3_01_Index  = [ 0, 1, 3, 2 ], Hull3_00_Convex = [            ]; // # 1 ABDC: 11 <- -> 12
    var Test3_02_Index  = [ 0, 2, 1, 3 ], Hull3_00_Convex = [            ]; // # 2 ACBD: 15 <- -> 19
    var Test3_03_Index  = [ 0, 2, 3, 1 ], Hull3_00_Convex = [            ]; // # 3 ACDB: 17 <- ->  6
    var Test3_04_Index  = [ 0, 3, 1, 2 ], Hull3_00_Convex = [            ]; // # 4 ADBC: 21 <- -> 13
    var Test3_05_Index  = [ 0, 3, 2, 1 ], Hull3_00_Convex = [            ]; // # 5 ADCB: 23 <- ->  7

    var Test3_06_Index  = [ 1, 0, 2, 3 ], Hull3_00_Convex = [            ]; // # 6 BACD:  3 <- -> 20
    var Test3_07_Index  = [ 1, 0, 3, 2 ], Hull3_00_Convex = [            ]; // # 7 BADC:  5 <- -> 14
    var Test3_08_Index  = [ 1, 2, 0, 3 ], Hull3_00_Convex = [            ]; // # 8 BCAD: 13 <- -> 21
    var Test3_09_Index  = [ 1, 2, 3, 0 ], Hull3_00_Convex = [            ]; // # 9 BCDA: 16 <- ->  0
    var Test3_10_Index  = [ 1, 3, 0, 2 ], Hull3_00_Convex = [            ]; // #10 BDAC: 19 <- -> 15
    var Test3_11_Index  = [ 1, 3, 2, 0 ], Hull3_00_Convex = [            ]; // #11 BDCA: 22 <- ->  1

    var Test3_12_Index  = [ 2, 0, 1, 3 ], Hull3_00_Convex = [            ]; // #12 CABD:  1 <- -> 22
    var Test3_13_Index  = [ 2, 0, 3, 1 ], Hull3_00_Convex = [            ]; // #13 CADB:  4 <- ->  8
    var Test3_14_Index  = [ 2, 1, 0, 3 ], Hull3_00_Convex = [            ]; // #14 CBAD:  7 <- -> 23
    var Test3_15_Index  = [ 2, 1, 3, 0 ], Hull3_00_Convex = [            ]; // #15 CBDA: 10 <- ->  2
    var Test3_16_Index  = [ 2, 3, 0, 1 ], Hull3_00_Convex = [            ]; // #16 CDAB: 18 <- ->  9
    var Test3_17_Index  = [ 2, 3, 1, 0 ], Hull3_00_Convex = [            ]; // #17 CDBA: 20 <- ->  3

    var Test3_18_Index  = [ 3, 0, 1, 2 ], Hull3_00_Convex = [            ]; // #18 DABC:  0 <- -> 16
    var Test3_19_Index  = [ 3, 0, 2, 1 ], Hull3_00_Convex = [            ]; // #19 DACB:  2 <- -> 10
    var Test3_20_Index  = [ 3, 1, 0, 2 ], Hull3_00_Convex = [            ]; // #20 DBAC:  6 <- -> 17
    var Test3_21_Index  = [ 3, 1, 2, 0 ], Hull3_00_Convex = [            ]; // #21 DBCA:  8 <- ->  4
    var Test3_22_Index  = [ 3, 2, 0, 1 ], Hull3_00_Convex = [            ]; // #22 DCAB: 12 <- -> 11
    var Test3_23_Index  = [ 3, 2, 1, 0 ], Hull3_00_Convex = [            ]; // #23 DCBA: 14 <- ->  5



// 5 vertices: Combinations = 5!*2 = 120*2 = (120 CW, 120 CCW)
    /*  NOTE: Origin is in top left!
            o - - - - - >+X
            | A---->B
              ^    / 
            | | E /  
              |  /   
            | | /    
              |/     
            | D     C
            v
            +Y
    */
    var Hull7Convex = [ 0, 1, 3, 2 ];
    var Test7VertXY = // CW Outside Right Test ABDCE
    [
        1, 1, // A v0
        4, 1, // B v1
        1, 4, // D v2
        4, 4, // C v3
        2, 2  // E v4
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
            v
            +Y
    */
    var Hull8Convex = [ 0, 1, 4, 2 ];
    var Test8VertXY = // CW Outside Right Test ABDEC
    [
        1, 1, // A v0
        4, 1, // B v1
        1, 4, // D v2
        2, 2, // E v3
        4, 4  // C v4
    ];


    /*  // NOTE: Origin is in top left
            o - - - - - >+X
            | A---->B
              |\   /|
            | | \ / |
              |  /  |
            | | / \ |
              |/   \v
            | D-----C
    */
    var Test0PointsXY = // CW Outside Test
    [
        1, 1, // A
        4, 1, // B
        4, 4, // C
        1, 4  // D
    ];
}



