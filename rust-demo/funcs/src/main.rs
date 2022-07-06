fn main() {
    println!("Hello, world!");
    foo();
    println!("{}", total(1, 2));
    let x = 8;
    let y = {
        let x = 8;
        x + 1
    };

    println!("x {}", x);
    println!("y {}", y);
}

fn foo() {
    // inner funcs
    fn five() -> i32 {
        return 32;
    }
    println!("hello steve {}", five())
}

// function args
fn total(x: i32, y: i32) -> i32 {
    return x + y;
}

// you can delare funcitons in anywhere
