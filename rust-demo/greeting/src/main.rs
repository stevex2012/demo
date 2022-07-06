fn main() {
    let a = 99;
    println!("Hello, world!, {},{{a:1}}", a);
    let mut s = "4332";
    let x = 2.0;
    let y: f32 = 3.0;
    // s = s.len();
    // int
    let int8: i8 = 9;
    let uint8: u8 = 9;
    let int16: i16 = 16;
    let int32: i32 = 32;
    let int64: i64 = 64;
    let int128: i128 = 128;
    let isize: isize = 24234;
    let usize: usize = 23432;
    // 整数
    let ten = 98_222;
    let t16 = 0xff;
    let t8 = 0o77;
    let t2 = 0b1111_000;
    let tbyte = b'A';
    print!("{}", ten);

    // float
    print!("float");
    let f32: f32 = 32.0; //32
    let f64 = 64.0; // default 64;
                    // boolean;
    println!("boolean");
    let yes = true;
    let no = false;
    println!("string char");
    // s

    println!("复合类型");
    let tup: (i32, f64, u8) = (500, 64.0, 8);
    let (x, y, z) = tup;
    println!("{0}", x);

    // [same type in array]
    println!("Array");
    let arr = [1, 2, 3];
    let arrrStr = ["steve", "mike", "harry"];
    let d = [3; 5];
    println!("{}", d[0]);

    // 注释
    /**sfdf */
    // 223lk54j3
    // 345k43j5
    let res = add(3, 4);
    println!("res{}", res)

    // cargo doc 生成文档
}
// int
// float

/// Adds one to the number given.
///
/// # Examples
///
/// ```
/// let x = add(1, 2);
///
/// ```
fn add(a: i32, b: i32) -> i32 {
    return a + b;
}
