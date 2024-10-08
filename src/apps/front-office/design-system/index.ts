import { googleFont } from "@mongez/dom";
import { current } from "@mongez/react";

if (current("localeCode") === "ar") {
  // load Cairo font from google for Arabic language
  googleFont(
    "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap",
  );
} else {
  // load Cairo font from google for Arabic language
  googleFont(
    "https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap",
  );
}
