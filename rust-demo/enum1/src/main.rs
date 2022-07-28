mod module;
#[derive(Debug)]
enum Book {
    Author,
    Time { url: String },
}

mod nation {
    pub mod government {
        pub fn forever() {
            println!("there is forever")
        }
    }
    mod congress {
        fn list() {}
    }
    fn len() {}
}

mod back_of_house {
    pub struct Breakfast {
        pub toast: String,
        sesaon_fruit: String,
    }

    impl Breakfast {
        pub fn summer(toast: &str) -> Breakfast {
            Breakfast {
                toast: String::from(toast),
                sesaon_fruit: String::from("peaches"),
            }
        }
    }
}
pub fn eat_at_reataurant() {
    let mut meal = back_of_house::Breakfast::summer("Rye");
    meal.toast = String::from("milk");
    println!("I'd like eat {} xxx", meal.toast)
}

mod ModuleA {
    pub enum Person {
        King { name: String },
        Quene,
    }
}

fn main() {
    let book = Book::Time {
        url: String::from("2342"),
    };
    let book2 = Book::Time {
        url: String::from("2342"),
    };
    println!("Hello, world!,{:?}", book);
    println!("Hello, world!,{:?}", book2);

    nation::government::forever();
    eat_at_reataurant();

    let person = ModuleA::Person::King {
        name: String::from("steve"),
    };
    let p2 = ModuleA::Person::King {
        name: String::from("zm"),
    };
    match person {
        ModuleA::Person::King { name } => {
            println!("name is {}", name)
        }
        _ => {}
    }
    match p2 {
        ModuleA::Person::King { name } => {
            println!("there is {}", name)
        }
        ModuleA::Person::Quene {} => {}
    }
    println!("{}", module::message())
}

// nation::congress::list()
