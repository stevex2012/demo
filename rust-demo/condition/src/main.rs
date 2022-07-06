// 条件语句

fn main() {
    println!("Hello, world!");
    judge();
    bincon();
}

fn judge() {
    let num = 12;
    if num == 12 {
        println!("break")
    }
    if num > 5 {
        println!("true")
    } else {
        println!("false")
    }
}

fn bincon() {
    let num = 3;
    let number = if num > 0 { 1 } else { -1 };
    // if number {
    //     println!("boolean")
    // }
}
