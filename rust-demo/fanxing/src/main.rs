// fn max<T>(arr: &[T]) -> T {
//     let mut max_index = 0;
//     let mut i = 1;
//     while i < arr.len() {
//         if arr[i] > arr[max_index] {
//             max_index = i;
//         }
//         i += 1;
//     }
//     arr[max_index]
// }

struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

enum Option<T> {
    Some(T),
    None,
}

fn main() {
    // let arr = [3, 5, 6, 8, 2, 9];
    // let r = max(&arr);
    // println!("Hello, world! {}", r);
    let p1 = Point { x: 333333332, y: 3 };
    println!("!p.x is {}", p1.x())
}
