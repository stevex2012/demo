mod nation {
    pub mod goverment {
        pub fn govern() {
            println!("wr")
        }
        pub fn list() {
            println!("list")
        }
    }
    pub fn govern() {
        println!("father govern")
    }
    pub use goverment::list;
}

use crate::nation::goverment::govern;
use crate::nation::govern as father_g;
use std::f64::consts::PI;

fn main() {
    govern();
    father_g();
    nation::list();
    println!("Hello, world!");
    println!("{}", PI)
}
