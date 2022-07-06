fn main() {
    println!("Hello, world!");
    let s = String::from("broadcoast");
    let s1 = &s[..];
    let s2 = &s[5..];
    println!("s1 is {}", s1);
    // s.push_str("234");//被切片引用的字符串禁止更改其值
    println!("s1 is {}", s2);

    let str = "revoluttion";
    let str1 = &str[0..1];
    println!("str1 is {}", str1);
}
