mod font;
use font::Font;

use minifb::{Key, Window, WindowOptions};

fn main() {
    let mut app = App::new();
    app.run();
}

struct App {
    window: Window,
    win_w: usize,
    win_h: usize,
    buffer: Vec<u32>,
    char_w: usize,
    char_h: usize,
}

impl App {
    fn new() -> Self {
        let win_w = 960;
        let win_h = 540;

        let window = Window::new("Text Rendering", win_w, win_h, WindowOptions::default()).expect("Failed to create window");

        let buffer = vec![0x000000; win_h * win_w];

        App {
            window,
            win_w,
            win_h,
            buffer,
            char_w: 8,
            char_h: 16,
        }
    }

    fn run(&mut self) {
        while self.window.is_open() {
            if self.window.is_key_down(Key::Escape) {
                break;
            }

            self.update();

            
        }
    }

    fn update(&mut self) {
        self.window.update_with_buffer(&self.buffer, self.win_w, self.win_h).expect("Failed to update window");
    }
}
