export const base = `
use std::collections::HashMap;

pub struct Font {
    pub letters: HashMap<char, [u8; 16]>,
}

impl Font {
    pub fn new() -> Self {
        let mut letters = HashMap::new();
`;

export const end = `
        Font { letters }
    }
}
`;