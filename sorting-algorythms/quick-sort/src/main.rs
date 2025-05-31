use rand::seq::SliceRandom;
use rand::thread_rng;

fn main() {
    let length = 1000;

    let mut list: Vec<u32> = (1..=length).collect();

    let mut rng = thread_rng();
    list.shuffle(&mut rng);

    println!("=========================================");
    println!("Quick Sort with {} objects to sort", length);
    println!("=========================================");

    println!("Unsorted list:\n{:?}", list);
    println!("-----------------------------------------");

    let len = list.len();
    quick_sort(&mut list, 0, len as isize - 1);

    println!("-----------------------------------------");
    println!("Sorted list:\n{:?}", list);
}

fn quick_sort(list: &mut Vec<u32>, low: isize, high: isize) {
    if low < high {
        let pivot_index = partition(list, low, high);
        println!("Current list:\n{:?}", list);
        quick_sort(list, low, pivot_index - 1);
        quick_sort(list, pivot_index + 1, high);
    }
}

fn partition(list: &mut Vec<u32>, low: isize, high: isize) -> isize {
    let pivot = list[high as usize];
    let mut i = low - 1;

    for j in low..high {
        if list[j as usize] <= pivot {
            i += 1;
            list.swap(i as usize, j as usize);
        }
    }

    list.swap((i + 1) as usize, high as usize);
    i + 1
}
