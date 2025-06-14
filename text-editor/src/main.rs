mod navbar;

use navbar::NavBar;

use eframe::{egui, egui::Vec2};

fn main() -> Result<(), eframe::Error> {
    let options = eframe::NativeOptions {
        viewport: {
            egui::ViewportBuilder::default()
                .with_inner_size([800.0, 450.0])
                .with_title("Text editor")
                .with_close_button(true)
        },
        ..Default::default()
    };
    eframe::run_native(
        "Text Editor",
        options,
        Box::new(|_cc| Ok(Box::<TextEditorApp>::default())),
    )
}

struct TextEditorApp {
    display_text: String,
}

impl Default for TextEditorApp {
    fn default() -> Self {
        Self {
            display_text: "This is the display text".to_string(),
        }
    }
}

impl eframe::App for TextEditorApp {
    fn update(&mut self, context: &egui::Context, _frame: &mut eframe::Frame) {
        NavBar::show(context);

        egui::CentralPanel::default().show(context, |ui| {
            ui.heading("Text Editor");

            ui.add_space(10.0);

            let available_size = ui.available_size();
            ui.allocate_ui_with_layout(
                available_size,
                    egui::Layout::top_down(egui::Align::Min), |ui| {
                        egui::Frame::group(ui.style()).show(ui, |ui| {
                            ui.set_min_size(available_size);
                            
                            let editor = egui::TextEdit::multiline(&mut self.display_text).min_size(available_size);
                            ui.add(editor);
                        });
                    },
                );
        });
    }
}