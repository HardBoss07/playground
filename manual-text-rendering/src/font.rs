use std::collections::HashMap;

pub struct Font {
    pub letters: HashMap<char, [u8; 16]>,
}

// Font size is 8x16
impl Font {
    pub fn new() -> Self {
        let mut letters = HashMap::new();

        letters.insert('A', [
            0b00000000,
            0b00011000,
            0b00011000,
            0b00011000,
            0b00100100,
            0b00100100,
            0b00100100,
            0b00100100,
            0b00111100,
            0b00100100,
            0b01000010,
            0b01000010,
            0b01000010,
            0b01000010,
            0b01000010,
            0b00000000,
        ]);

        Font { letters }
    }
}
