use rand::seq::SliceRandom;
use rand::thread_rng;

fn main() {
    let length = 50;

    let mut list: Vec<u32> = (1..=length).collect();

    let mut rng = thread_rng();
    list.shuffle(&mut rng);

    println!("=========================================");
    println!("Insertion Sort with {} objects to sort", length);
    println!("=========================================");

    println!("Unsorted list:\n{:?}", list);

    println!("-----------------------------------------");

    for i in 1..list.len() {
        let key = list[i];
        let mut j = i;

        while j > 0 && list[j - 1] > key {
            list[j] = list[j - 1];
            j -= 1;
        }

        list[j] = key;

        println!("Current list:\n{:?}", list);
    }

    println!("-----------------------------------------");

    println!("Sorted list:\n{:?}", list);
}
