fn main() {
    println!("Hello, world! loop");
    fn1();
    for_arr();
}

fn fn1() {
    let mut num = 1;
    while num != 5 {
        println!("num is {}", num);
        num += 1;
    }
    println!("exit");
    main1();
}

fn for_arr() {
    let arr = [1, 2, 3, 4, 5, 6];
    for i in arr.iter() {
        println!("i is {}", i)
    }
    let arr2 = [10, 20, 30, 40, 50];
    for j in 0..5 {
        println!("J is {}", arr2[j])
    }

    let s = ["z", "o", "n", "g", "m", "e", "i"];
    let mut i = 0;
    loop {
        let ch = s[i];
        if ch == "e" {
            break;
        }
        println!("\'{}\'", ch);
        i += 1;
    }
    let s1 = String::from("hello");
    let s2 = s1;
    // println!("s1 {}", s1);//orrow of moved value: `s1`
    println!("s2 {}", s2);
    // clone;
    let s3 = String::from("world");
    let s4 = s3.clone();
    println!("s3 = {},s4 = {}", s3, s4)
}

fn main1() {
    let s = String::from("hello");
    foo1(s);
    // println!("s {}", s);move occurs because `s` has type `String`, which does not implement the `Copy` trait
    let x = 5;
    foo2(x);
}

fn foo1(str: String) {
    println!("str is {}", str)
}

fn foo2(int: i32) {
    println!("int is {}", int)
}
