// error
use std::fs::File;

// enum Result<T, E> {
//     Ok(T),
//     Err(E),
// }

fn f(i: i32) -> Result<i32, bool> {
    if i >= 0 {
        Ok(i)
    } else {
        Err(false)
    }
}
fn f1(i: i32) -> Result<i32, bool> {
    if i >= 0 {
        Ok(i)
    } else {
        Err(false)
    }
}

fn g(i: i32) -> Result<i32, bool> {
    let t = f(i)?;
    Ok(t);
    // return match t {
    //     Ok(i),
    //     Err(bool)
    // };
}

fn main() {
    let r = f(1000);

    if let Ok(v) = r {
        println!("success {}", v)
    } else {
        println!("err")
    }
    // panic!("error occoured");
    // let f = File::open("hello.txt").unwrap();
    // let f2 = File::open("./hello.txt").expect("open failed");
    // let println!("Hello, world! {}", f);

    // if let Ok(file) = f {
    //     println!("file open success")
    // } else {
    //     println!("file open failed")
    // }

    // match f {
    //     Ok(file) => {
    //         println!("file open success")
    //     }
    //     Err(err) => {
    //         println!("file open failed")
    //     }
    // }
}
