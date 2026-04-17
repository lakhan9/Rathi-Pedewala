/* Rathi Pedewala — menu from saved listing; prices: confirm on WhatsApp (only chutney had ₹ in source).
   Each item has u: Unsplash CDN (images.unsplash.com) — representative stock, not your exact tray.
   Unsplash License: https://unsplash.com/license */
(function () {
  var q = "?auto=format&fit=crop&w=400&q=75";
  function u(id) {
    return "https://images.unsplash.com/photo-" + id + q;
  }

  window.RP_MENU = [
    /* Signature pedas — Indian milk sweets / peda */
    { c: "pedas", n: "Kesar Peda", s: 1, u: u("1758910536889-43ce7b3199fd") },
    { c: "pedas", n: "Malai Peda", s: 1, u: u("1606313564200-e75d5e30476c") },
    { c: "pedas", n: "Special Peda", u: u("1558961363-fa8fdf82db35") },
    { c: "pedas", n: "Gud (Jaggery) Peda", u: u("1593701461250-d7b22dfd3a77") },
    { c: "pedas", n: "Mathura Peda", u: u("1666190092159-3171cf0fbb12") },
    { c: "pedas", n: "Gulkand & Dry-Fruit Peda", s: 1, u: u("1680993032090-1ef7ea9b51e5") },
    /* Mithai & ladoo */
    { c: "mithai", n: "Rasgulla", u: u("1666190092159-3171cf0fbb12") },
    { c: "mithai", n: "Bengali Sweet", u: u("1758910536889-43ce7b3199fd") },
    { c: "mithai", n: "Pakiza Bengali", u: u("1646578515903-67873a5398f9") },
    { c: "mithai", n: "Rasmalai", s: 1, u: u("1578985545062-69928b1d9587") },
    { c: "mithai", n: "Ras Angoori", u: u("1488477181946-6428a029177b") },
    { c: "mithai", n: "Basundi", u: u("1563805042-7684c019e1cb") },
    { c: "mithai", n: "Kaju Katli", s: 1, u: u("1499636136210-6f4ee915583e") },
    { c: "mithai", n: "Mixed Dry-Fruit Sweet", u: u("1680993032090-1ef7ea9b51e5") },
    { c: "mithai", n: "Kaju Coin", u: u("1606313564200-e75d5e30476c") },
    { c: "mithai", n: "Kaju Roll", u: u("1558961363-fa8fdf82db35") },
    { c: "mithai", n: "Sugar-Free Sweet", u: u("1578985545062-69928b1d9587") },
    { c: "mithai", n: "Kaju Dry-Fruit Bites", s: 1, u: u("1758910536889-43ce7b3199fd") },
    { c: "mithai", n: "Milk Cake Kalakand", u: u("1593701461250-d7b22dfd3a77") },
    { c: "mithai", n: "Kalakand Burfi", u: u("1666190092159-3171cf0fbb12") },
    { c: "mithai", n: "Coconut Burfi", u: u("1488477181946-6428a029177b") },
    { c: "mithai", n: "Malai Fancy Sweet", u: u("1563805042-7684c019e1cb") },
    { c: "mithai", n: "Pure Ghee Motichoor Ladoo", s: 1, u: u("1646578515903-67873a5398f9") },
    { c: "mithai", n: "Motichoor Ladoo (Dalda)", u: u("1499636136210-6f4ee915583e") },
    { c: "mithai", n: "Besan Burfi", u: u("1606313564200-e75d5e30476c") },
    { c: "mithai", n: "Gulab Jamun", s: 1, u: u("1593701461250-d7b22dfd3a77") },
    { c: "mithai", n: "Special Jamun", u: u("1666190092159-3171cf0fbb12") },
    { c: "mithai", n: "Mawa Gujiya", u: u("1758910536889-43ce7b3199fd") },
    { c: "mithai", n: "Kala Jamun", u: u("1593701461250-d7b22dfd3a77") },
    /* Namkeen — snacks, sev, mixture, chips */
    { c: "namkeen", n: "All-in-One Mixture", u: u("1697155836252-d7f969108b5a") },
    { c: "namkeen", n: "Indori Khatta Meetha", s: 1, u: u("1599490659213-e2b9527bd087") },
    { c: "namkeen", n: "Jaipuri Tej Mixture", u: u("1601050690597-df0568f70950") },
    { c: "namkeen", n: "Sada Chivda", u: u("1566222498830-b2bb2934ac3b") },
    { c: "namkeen", n: "Kachha Chooda", u: u("1589786742305-f24d19eedbe5") },
    { c: "namkeen", n: "Bhel Mixture", u: u("1697155836252-d7f969108b5a") },
    { c: "namkeen", n: "Ratlami Sev", s: 1, u: u("1601050690117-94f5f6fa8bd7") },
    { c: "namkeen", n: "Lal Mirch Sev", u: u("1601050690597-df0568f70950") },
    { c: "namkeen", n: "Barik Sev", u: u("1622715395488-71045e2a4990") },
    { c: "namkeen", n: "Besan Papdi", u: u("1622715395486-08183374570a") },
    { c: "namkeen", n: "Gathiya", s: 1, u: u("1601050690294-397f3c324515") },
    { c: "namkeen", n: "Lehsuni Sev", u: u("1589301773859-bb024d3ad558") },
    { c: "namkeen", n: "Moong Mogar", u: u("1599490659213-e2b9527bd087") },
    { c: "namkeen", n: "Chana Dal", u: u("1566222499048-9538f86d4675") },
    { c: "namkeen", n: "Dal Moth", u: u("1697155836252-d7f969108b5a") },
    { c: "namkeen", n: "Khasta", w: "200 g", u: u("1714799263348-41c7245cd714") },
    { c: "namkeen", n: "Shakkar Para", w: "250 g", u: u("1622715395488-71045e2a4990") },
    { c: "namkeen", n: "Chakli", u: u("1601050690294-397f3c324515") },
    { c: "namkeen", n: "Suwali", w: "200 g", u: u("1622715395486-08183374570a") },
    { c: "namkeen", n: "Namkeen Para", w: "200 g", u: u("1714799263348-41c7245cd714") },
    { c: "namkeen", n: "Chaat Papdi", w: "200 g", u: u("1589786742305-f24d19eedbe5") },
    { c: "namkeen", n: "Aloo Wafers", u: u("1601050690597-df0568f70950") },
    { c: "namkeen", n: "Banana Chips", u: u("1512621776951-a57141f2eefd") },
    { c: "namkeen", n: "Disco Samosa", w: "200 g", u: u("1572099107898-46f22b3af4f9") },
    { c: "namkeen", n: "Disco Kachori", w: "200 g", u: u("1714799263348-41c7245cd714") },
    { c: "namkeen", n: "Farali Chivda (Plain)", w: "200 g", u: u("1540189549336-e6e99c3679fe") },
    { c: "namkeen", n: "Farali Chivda (Dry Fruit)", w: "200 g", u: u("1566222498830-b2bb2934ac3b") },
    /* Hot kitchen */
    { c: "kitchen", n: "Samosa", s: 1, u: u("1572099107898-46f22b3af4f9") },
    { c: "kitchen", n: "Kachori", s: 1, u: u("1714799263348-41c7245cd714") },
    { c: "kitchen", n: "Dhokla", u: u("1589301773859-bb024d3ad558") },
    { c: "kitchen", n: "Cheese Pav Bhaji", w: "2 pav", u: u("1585937421612-70a008356fbe") },
    { c: "kitchen", n: "Cheese Pizza Dosa", u: u("1743517894265-c86ab035adef") },
    { c: "kitchen", n: "Paneer Tikka Sandwich", u: u("1528735602780-2552fd46c7af") },
    { c: "kitchen", n: "Peri Peri Paneer Pizza", w: "6\"", u: u("1566222499048-9538f86d4675") },
    { c: "kitchen", n: "Missal Pav + Mattha", w: "2 pav · 200 ml", u: u("1589308078059-be1415eab4c3") },
    { c: "kitchen", n: "Veg Cheese Burger", u: u("1568901346375-23c9450c58cd") },
    { c: "kitchen", n: "Amritsari Chole Bhature", w: "2 pcs", u: u("1563379926898-05f4575a45d8") },
    { c: "kitchen", n: "Ragda Samosa Chaat", w: "1 plate", u: u("1589786742305-f24d19eedbe5") },
    { c: "kitchen", n: "Mini Thali", s: 1, u: u("1680993032090-1ef7ea9b51e5") },
    { c: "kitchen", n: "Ragda Kachori Chaat", w: "1 plate", u: u("1697155836252-d7f969108b5a") },
    { c: "kitchen", n: "Shanghai Dosa", u: u("1743615467363-250466982515") },
    { c: "kitchen", n: "Geenie Dosa", u: u("1743615467204-8fdaa85ff2db") },
    { c: "kitchen", n: "Kids Tutti-Frutti Dosa", u: u("1643268972535-a2b100ff3632") },
    { c: "kitchen", n: "Dal Makhani · Rice · Roti Combo", u: u("1585937421612-70a008356fbe") },
    { c: "kitchen", n: "Kaju Curry", u: u("1589308078059-be1415eab4c3") },
    { c: "kitchen", n: "Cheese Butter Masala", u: u("1563379926898-05f4575a45d8") },
    { c: "kitchen", n: "Mix Veg Curry", u: u("1540189549336-e6e99c3679fe") },
    { c: "kitchen", n: "Kathiyawadi Sev Tamatar", u: u("1601050690597-df0568f70950") },
    { c: "kitchen", n: "Veg Patiala", u: u("1680993032090-1ef7ea9b51e5") },
    { c: "kitchen", n: "VIP Paneer", u: u("1563379926898-05f4575a45d8") },
    { c: "kitchen", n: "Rajwadi Paneer", u: u("1589308078059-be1415eab4c3") },
    { c: "kitchen", n: "Dal Makhani", u: u("1585937421612-70a008356fbe") },
    { c: "kitchen", n: "Aloo Tamatar Matar", u: u("1540189549336-e6e99c3679fe") },
    { c: "kitchen", n: "Masala Dal Khichdi", u: u("1721980743533-49f5fa70994b") },
    { c: "kitchen", n: "Jeera Dal Khichdi", u: u("1732519970445-8f2d6998961f") },
    { c: "kitchen", n: "Veg Pulao", u: u("1680993032090-1ef7ea9b51e5") },
    { c: "kitchen", n: "Butter Tawa Chapati", u: u("1622715395488-71045e2a4990") },
    { c: "kitchen", n: "Sweet Orange Chutney", p: "25", u: u("1605027990121-2363a5b56744") },
    /* Chaat */
    { c: "chaat", n: "Bhel", s: 1, u: u("1697155836252-d7f969108b5a") },
    { c: "chaat", n: "Dahi Bhel", u: u("1589786742305-f24d19eedbe5") },
    { c: "chaat", n: "Pani Puri", w: "5 plates · 30 pcs", s: 1, u: u("1566222498830-b2bb2934ac3b") },
    { c: "chaat", n: "Butter Pav Bhaji", u: u("1585937421612-70a008356fbe") },
    { c: "chaat", n: "Dahi Vada", u: u("1589301773859-bb024d3ad558") },
    { c: "chaat", n: "Dahi Puri", u: u("1697155836252-d7f969108b5a") },
    { c: "chaat", n: "Raj Kachori Chaat", u: u("1566222499048-9538f86d4675") },
    { c: "chaat", n: "Dahi Khasta Chaat", u: u("1714799263348-41c7245cd714") },
    { c: "chaat", n: "Ragda Patties", u: u("1572099107898-46f22b3af4f9") },
    /* Farali */
    { c: "farali", n: "Sabudana Khichdi", w: "200 g", u: u("1721980743533-49f5fa70994b") },
    { c: "farali", n: "Farali Puri Bhaji", u: u("1589301773859-bb024d3ad558") },
    /* Seasonal */
    { c: "seasonal", n: "Hapus Aamras", w: "500 g", s: 1, u: u("1605027990121-2363a5b56744") },
    { c: "seasonal", n: "Mango Delight Rabdi", w: "500 g", u: u("1514996937319-344454492b37") },
    { c: "seasonal", n: "American Nut Shrikhand", u: u("1578985545062-69928b1d9587") },
    { c: "seasonal", n: "Chena Pie", u: u("1563805042-7684c019e1cb") },
    { c: "seasonal", n: "Shrikhand", s: 1, u: u("1488477181946-6428a029177b") },
    { c: "seasonal", n: "Sitaphal Rabdi", u: u("1605027990121-2363a5b56744") },
    { c: "seasonal", n: "Hapus Aam Rabdi", u: u("1514996937319-344454492b37") },
    { c: "seasonal", n: "Kesar Dry-Fruit Shrikhand", s: 1, u: u("1758910536889-43ce7b3199fd") },
    { c: "seasonal", n: "Anandi Bahar", u: u("1646578515903-67873a5398f9") }
  ];
})();

window.RP_MENU_CATS = [
  { id: "all", label: "All" },
  { id: "pedas", label: "Signature Pedas" },
  { id: "mithai", label: "Mithai & Ladoo" },
  { id: "namkeen", label: "Namkeen" },
  { id: "kitchen", label: "Hot Kitchen" },
  { id: "chaat", label: "Chaat" },
  { id: "farali", label: "Farali" },
  { id: "seasonal", label: "Seasonal & Regional" }
];

/* Fallback pools if an item ever omits u (e.g. future imports). All Unsplash. */
window.RP_CAT_IMGS = {
  pedas: [
    "https://images.unsplash.com/photo-1758910536889-43ce7b3199fd?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=75"
  ],
  mithai: [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1488477181946-6428a029177b?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=75"
  ],
  namkeen: [
    "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1697155836252-d7f969108b5a?auto=format&fit=crop&w=400&q=75"
  ],
  kitchen: [
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=400&q=75"
  ],
  chaat: [
    "https://images.unsplash.com/photo-1566222498830-b2bb2934ac3b?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1589786742305-f24d19eedbe5?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1697155836252-d7f969108b5a?auto=format&fit=crop&w=400&q=75"
  ],
  farali: [
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1721980743533-49f5fa70994b?auto=format&fit=crop&w=400&q=75"
  ],
  seasonal: [
    "https://images.unsplash.com/photo-1605027990121-2363a5b56744?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1758910536889-43ce7b3199fd?auto=format&fit=crop&w=400&q=75"
  ]
};

window.rpPickMenuPhoto = function (cat, name) {
  var pool = window.RP_CAT_IMGS && window.RP_CAT_IMGS[cat];
  if (!pool || !pool.length) return "";
  if (typeof pool === "string") return pool;
  var h = 0;
  var s = String(name);
  for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return pool[Math.abs(h) % pool.length];
};
