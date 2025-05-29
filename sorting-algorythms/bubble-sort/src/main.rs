use rand::seq::SliceRandom;
use rand::thread_rng;

fn main() {
    let length = 50;

    let mut list: Vec<u32> = (1..=length).collect();

    let mut rng = thread_rng();
    list.shuffle(&mut rng);

    println!("=========================================");
    println!("Bubble Sort with {} objects to sort", length);
    println!("=========================================");

    println!("Unsorted list:\n{:?}", list);

    println!("-----------------------------------------");

    for i in 0..list.len() {
        for j in 0..list.len() - 1 - i {
            if list[j] > list[j + 1] {
                list.swap(j, j + 1);
            }
        }
        println!("Current list:\n{:?}", list);
    }

    println!("-----------------------------------------");

    println!("Sorted list:\n{:?}", list);
}
