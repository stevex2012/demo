#[derive(Debug)]
struct Site {
    domain: String,
    name: String,
    nation: String,
    found: u32,
}

struct Color(u8, u8, u8);
#[derive(Debug)]
struct Rentangle {
    width: u32,
    height: u32,
}

impl Rentangle {
    fn area(&self) -> u32 {
        return self.width * self.height;
    }

    fn wider(&self, react2: &Rentangle) -> bool {
        return self.width > react2.width;
    }
    fn get_msg(&self) {
        println!("self is {:?}", self)
    }
    fn create(width: u32, height: u32) -> Rentangle {
        return Rentangle { width, height };
    }
}

fn main() {
    println!("Hello, world!");
    let foo = Site {
        domain: String::from("https://"),
        name: String::from("https://"),
        nation: String::from("https://"),
        found: 32,
    };
    println!("foo is {}", foo.domain);
    let new_foo = Site {
        domain: String::from("https34234://"),
        ..foo
    };
    println!("foo is {}", new_foo.domain);

    let c1: u8 = 145;

    let color = Color(0, 3, c1);
    println!("color is {}", color.1);
    println!("color is {:?}", new_foo);

    let shape1 = Rentangle {
        width: 20,
        height: 199,
    };
    println!("shape1 is {:?}", shape1);
    println!("shape1 is area is {}", shape1.area());

    let shape2 = Rentangle {
        width: 10,
        height: 83,
    };

    shape2.get_msg();

    let rect1 = Rentangle {
        width: 30,
        height: 50,
    };
    let rect2 = Rentangle {
        width: 40,
        height: 20,
    };

    println!("whi is winer,{}", rect1.wider(&rect2));

    let rect3 = Rentangle::create(20, 999);

    rect3.get_msg();
}
