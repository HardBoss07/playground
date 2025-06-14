use eframe::egui;

pub struct NavBar;

impl NavBar {
    pub fn show(context: &egui::Context) {
        egui::TopBottomPanel::top("menu_bar").show(context, |ui| {
            egui::menu::bar(ui, |ui| {
                ui.menu_button("File", |ui| {
                    if ui.button("Open").clicked() {
                        // TODO: File open logic
                        ui.close_menu();
                    }
                    if ui.button("Save").clicked() {
                        // TODO: File save logic
                        ui.close_menu();
                    }
                    if ui.button("Exit").clicked() {
                        // TODO: App quit logic
                        ui.close_menu();
                    }
                });
            });
        });
    }
}