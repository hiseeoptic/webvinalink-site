export type MembershipTier = "normal" | "silver" | "gold" | "super_gold";

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  prices: Record<MembershipTier, number>;
  points: number;
  image: string;
  description: string;
  ingredients: string;
  usage: string;
  benefits: string;
  origin: string;
  manufacturer: string;
  distributor: string;
  registration: string;
  licenseImage?: string;
}

export interface CartItem {
  product: Product;
  membership: MembershipTier;
  quantity: number;
}

export const MEMBERSHIP_LABELS: Record<MembershipTier, string> = {
  normal: "Thường",
  silver: "Bạc",
  gold: "Vàng",
  super_gold: "Sau Vàng",
};

export const CATEGORIES = [
  { key: "all", label: "Tất cả" },
  { key: "thuc-pham-bo-sung", label: "Thực phẩm bổ sung" },
  { key: "bao-ve-suc-khoe", label: "Bảo vệ sức khỏe" },
  { key: "cham-soc-ca-nhan", label: "Chăm sóc cá nhân" },
  { key: "cham-soc-da", label: "Chăm sóc da (Orico)" },
];

const rawProducts = [
  {
    id: 1,
    name: "Kem đánh răng VSmile",
    slug: "kem-danh-rang-vsmile",
    category: "cham-soc-ca-nhan",
    prices: { normal: 897000, silver: 780000, gold: 780000, super_gold: 702000 },
    points: 310,
    image: "/images/products/kem-danh-rang.jpg",
    description: "Kem đánh răng VSmile 150g/hộp - 5 hộp/lốc. Sản phẩm chăm sóc răng miệng cao cấp từ Vinalink.",
    ingredients: "Purified Water (Nước tinh khiết); Sorbitol; Hydrated silica; Xylitol; Glycerin; Propylene glycol; Sodium chloride; Sodium lauryl sulfate; Sodium Carboxymethylcellulose; Menthol; Canxi nano (Calcium Hydroxyapatite); Chiết xuất Neem (Azadirachta indica extract); Sodium saccharin; Nipagin (Methylparaben); Lumbrokinase; Nipasol (Propylparaben); Hương liệu (Flavor); Methyl diisopropyl propionamide.",
    usage: "Nên dùng sau khi ngủ dậy, sau khi ăn và trước khi đi ngủ, ít nhất 2 lần/ngày.",
    benefits: "Giúp răng trắng sáng, ngăn ngừa sâu răng, bảo vệ nướu, thơm miệng lâu. Chứa Canxi nano giúp tái khoáng men răng, Lumbrokinase hỗ trợ sức khỏe nướu.",
  },
  {
    id: 2,
    name: "Cà phê Link",
    slug: "caphelink",
    category: "thuc-pham-bo-sung",
    prices: { normal: 888691, silver: 765818, gold: 765818, super_gold: 689237 },
    points: 300,
    image: "/images/products/caphelink.jpg",
    description: "Thực phẩm bổ sung Caphelink New. Cà phê kết hợp các thành phần tốt cho sức khỏe.",
    ingredients: "Mỗi gói 16g chứa: Chất tạo ngọt tự nhiên (đường tinh luyện, lactose, dextrose, manitol); bột kem không sữa (non dairy creamer); cà phê hòa tan nguyên chất; Lá chay (Artocarpus tonkinensis leaf); Hoàng kỳ (Astragalus membranaceus); DeltaImmune (vách tế bào Lactobacillus rhamnosus, maltodextrin, mannitol) 150mg; hương liệu thực phẩm tổng hợp (hương cà phê); chất chống đông vón (silicon dioxide); natri clorid; Selen (từ men giàu selen) 15mcg.",
    usage: "Ngày dùng 1-2 gói hoặc nhiều hơn theo nhu cầu, pha trong khoảng 50ml nước nóng, khuấy đều. Có thể uống nóng hoặc thêm đá tùy sở thích. Không dùng cho trẻ em. Không nên sử dụng trước khi ngủ nếu bị mất ngủ do cafein.",
    benefits: "Tỉnh táo, tăng cường năng lượng, hỗ trợ miễn dịch nhờ DeltaImmune và Selen. Khối lượng tịnh: 320g/hộp (20 gói x 16g/gói).",
  },
  {
    id: 4,
    name: "Dầu gội",
    slug: "dau-goi",
    category: "cham-soc-ca-nhan",
    prices: { normal: 490000, silver: 420000, gold: 325000, super_gold: 325000 },
    points: 125,
    image: "/images/products/dau-goi.jpg",
    description: "Dầu gội đầu thảo dược từ Vinalink, giúp tóc chắc khỏe và mềm mượt.",
    ingredients: "Chiết xuất thảo dược tự nhiên, Biotin, Keratin, Vitamin B5, tinh dầu bưởi.",
    usage: "Làm ướt tóc, lấy lượng vừa đủ xoa đều lên tóc, massage nhẹ 2-3 phút rồi xả sạch.",
    benefits: "Làm sạch da đầu, giảm gàu, giảm rụng tóc, tóc mềm mượt và bóng khỏe.",
  },
  {
    id: 10,
    name: "VHealth Socola",
    slug: "vhealth-socola",
    category: "thuc-pham-bo-sung",
    prices: { normal: 652909, silver: 567491, gold: 540000, super_gold: 510000 },
    points: 207,
    image: "/images/products/vhealth-socola.jpg",
    description: "Thực phẩm bổ sung VHealth hương Socola. Bột dinh dưỡng đa năng pha với nước.",
    ingredients: "Mỗi gói 25g chứa: Kem không sữa (non dairy creamer); bột hỗn hợp các hạt (Gạo tẻ, đậu nành, đậu xanh, đậu lăng, hạnh nhân, đậu Hà Lan); Maltodextrin; Protein đậu Hà Lan; chất xơ hòa tan (FOS (oligofructose), Inulin); bột sữa gầy; Yến mạch; bột ca cao; chất tạo ngọt tự nhiên (Fructose); hương liệu thực phẩm tổng hợp (hương socola, hương vani); chất làm dày (gôm gua, gôm xanthan); Hoàng kỳ (Astragalus membranaceus); Canxi (từ tảo biển) 125mg; Natri clorid; Đảng sâm (Codonopsis pilosula); chất chống đông vón (silicon dioxide); Immulata (Nấm hầu thủ, Tảo Nannochloropsis sp. tươi, lactose monohydrate); Vitamin C 15mg; Nấm Chaga (Inonotus obliquus); IMCDeltaImmune (Vách tế bào Lactobacillus rhamnosus, maltodextrin); bột chiết xuất Nấm ngưu chương chi (Antrodia cinnamomea mycelia); Magiê (dưới dạng Magiê lactat dihydrat) 10mg; chất tạo ngọt tổng hợp (Sucralose); Kẽm (dưới dạng Kẽm gluconat) 2mg; Vitamin B1 (Thiamin mononitrat) 0,5mg; Vitamin B2 (Riboflavin) 0,5mg; Vitamin B6 (Pyridoxin hydroclorid) 0,5mg.",
    usage: "Pha 1 gói VHealth với khoảng 150ml nước. Có thể pha với nước lọc, sữa, nước hoa quả... khuấy đều và thưởng thức. Ngon hơn khi pha với nước ấm. Dùng cho người lớn, trẻ em trên 6 tuổi. Có thể pha 1-2 gói/lần, ngày dùng 1-3 gói hoặc nhiều hơn tùy nhu cầu. Trẻ em sử dụng 1 gói/ngày, chia 1-2 lần. Khối lượng tịnh: 375g (15 gói); 500g (20 gói); 750g (30 gói).",
    benefits: "Bổ sung dinh dưỡng đa dạng, tăng cường sức đề kháng, hỗ trợ tiêu hóa, cung cấp năng lượng. Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.",
  },
  {
    id: 11,
    name: "VHealth Trà Xanh",
    slug: "vhealth-tra-xanh",
    category: "thuc-pham-bo-sung",
    prices: { normal: 652909, silver: 567491, gold: 540000, super_gold: 510000 },
    points: 207,
    image: "/images/products/vhealth-traxanh.jpg",
    description: "Thực phẩm bổ sung VHealth hương Trà xanh. Bột dinh dưỡng thơm ngon.",
    ingredients: "Mỗi gói 25g chứa: Kem không sữa (Non dairy creamer); bột hỗn hợp các hạt (Gạo tẻ, đậu nành, đậu xanh, đậu lăng, hạnh nhân, đậu Hà Lan); maltodextrin; protein đậu Hà Lan; chất xơ hòa tan (FOS (oligofructose), Inulin); bột sữa gầy; yến mạch; chất tạo ngọt tự nhiên (Fructose); hương liệu thực phẩm tổng hợp (hương trà xanh, hương trà xanh matcha, hương sữa); bột Matcha; chất làm dày (gôm xanthan, gôm gua); Hoàng kỳ (Astragalus membranaceus); Canxi (từ tảo biển) 125mg; Đảng sâm (Codonopsis pilosula); natri clorid; chất chống đông vón (silicon dioxide); Immulata (Nấm hầu thủ, Tảo Nannochloropsis sp. tươi, lactose monohydrate); Vitamin C 15mg; Nấm Chaga (Inonotus obliquus); IMCDeltaImmune (Vách tế bào vi khuẩn Lactobacillus rhamnosus, maltodextrin); bột chiết xuất Nấm ngưu chương chi (Antrodia cinnamomea mycelia); Magiê (dưới dạng Magiê lactat dihydrat) 10mg; chất tạo ngọt tổng hợp (Sucralose); Kẽm (dưới dạng kẽm gluconat) 2mg; Vitamin B1 (Thiamin mononitrat) 0,5mg; Vitamin B2 (Riboflavin) 0,5mg; Vitamin B6 (Pyridoxin hydroclorid) 0,5mg.",
    usage: "Pha 1 gói VHealth với khoảng 150ml nước. Có thể pha với nước lọc, sữa, nước hoa quả... khuấy đều và thưởng thức. Ngon hơn khi pha với nước ấm. Dùng cho người lớn, trẻ em trên 6 tuổi. Có thể pha 1-2 gói/lần, ngày dùng 1-3 gói hoặc nhiều hơn tùy nhu cầu. Trẻ em sử dụng 1 gói/ngày, chia 1-2 lần.",
    benefits: "Bổ sung dinh dưỡng, chống oxy hóa từ trà xanh Matcha, tăng cường miễn dịch, hỗ trợ tiêu hóa. Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.",
  },
  {
    id: 12,
    name: "Quantum Hydrogen",
    slug: "quantum-hydrogen",
    category: "thuc-pham-bo-sung",
    prices: { normal: 780000, silver: 579273, gold: 530182, super_gold: 481091 },
    points: 205,
    image: "/images/products/quantum.jpg",
    description: "Nước uống Hydrogen Quantum - 1 thùng 10 túi. Nước có cấu trúc phân tử nhỏ chứa Hydrogen.",
    ingredients: "Nước có cấu trúc dạng cụm phân tử nhỏ, chứa Hydrogen hoạt tính.",
    usage: "Sử dụng làm nước uống hàng ngày. Dùng trực tiếp, uống ngay khi mở nắp. Đóng kín sau mỗi lần sử dụng, nên dùng trong 4 giờ sau khi mở.",
    benefits: "Bổ sung Hydrogen cho cơ thể, chống oxy hóa, hỗ trợ trao đổi chất, thanh lọc cơ thể.",
  },
  {
    id: 13,
    name: "Genecel Max",
    slug: "genecel-max",
    category: "bao-ve-suc-khoe",
    prices: { normal: 489927, silver: 440836, gold: 391745, super_gold: 342655 },
    points: 160,
    image: "/images/products/genecel.jpg",
    description: "Thực phẩm bảo vệ sức khỏe Genecel® Max - hỗ trợ tế bào gốc, chống lão hóa.",
    ingredients: "Mỗi viên: IMCDeltaImmune (vách tế bào Lactobacillus rhamnosus) 400mg, Taurine 300mg, Cao Bạch thược 100mg, Cao Linh chi 100mg, Cao Khổ sâm bắc 90mg, Chiết xuất Pine bark (Thông đỏ) 30mg, Acid alpha Lipoic 20mg. Phụ liệu: cellulose vi tinh thể, silicon dioxid, magnesi stearat, talc, povidon, HPMC, PEG, titan dioxyd, brilliant blue FCF.",
    usage: "Ngày dùng 2-4 viên, chia 2 lần. Trước bữa ăn 30 phút hoặc sau ăn 1 giờ. Nên dùng liên tục 3-6 tháng. XNCB: 3196/2021/ĐKSP.",
    benefits: "Hỗ trợ tăng cường sức khỏe, tăng cường sức đề kháng, hỗ trợ chống oxy hóa, hỗ trợ hạn chế lão hóa.",
  },
  {
    id: 14,
    name: "Detoxmune Max",
    slug: "detoxmune-max",
    category: "bao-ve-suc-khoe",
    prices: { normal: 584182, silver: 505637, gold: 480109, super_gold: 431018 },
    points: 185,
    image: "/images/products/detoxmune.jpg",
    description: "Thực phẩm bảo vệ sức khỏe Detoxmune® Max - hỗ trợ bảo vệ gan, giải độc gan.",
    ingredients: "Mỗi viên: IMCDeltaImmune (vách tế bào Lactobacillus rhamnosus) 400mg, Cao Thổ phục linh 375mg, Calci alginat 150mg, L-Carnitin fumarat 22,5mg, L-Arginin (L-Arginine hydrochloride) 18,5mg, Acid alpha Lipoic 15mg. Phụ liệu: natri succinat hexahydrat, cellulose vi tinh thể, silicon dioxid, talc, magnesi stearat, lactose, PVA, povidon, HPMC, PEG, titan dioxyd, polysorbate 80, màu brilliant blue FCF, tartrazin yellow.",
    usage: "Ngày dùng 1 viên/lần, 1-2 lần/ngày. Trước ăn 30 phút hoặc sau ăn 1 giờ. Nên dùng liên tục 3-6 tháng. XNCB: 4302/2021/ĐKSP.",
    benefits: "Hỗ trợ bảo vệ gan, hỗ trợ giải độc gan, hỗ trợ tăng cường chức năng gan trong trường hợp viêm gan, uống nhiều rượu, dùng thuốc gây hại cho gan. Đối tượng: người viêm gan, uống nhiều bia rượu, mề đay mẩn ngứa, vàng da do chức năng gan kém.",
  },
  {
    id: 15,
    name: "Cardiopro Max",
    slug: "cardiopro-max",
    category: "bao-ve-suc-khoe",
    prices: { normal: 519382, silver: 441818, gold: 402545, super_gold: 353455 },
    points: 155,
    image: "/images/products/cardiopro.jpg",
    description: "Thực phẩm bảo vệ sức khỏe Cardiopro® Max - hỗ trợ tim mạch, lưu thông khí huyết.",
    ingredients: "Mỗi viên: IMCDeltaImmune (vách tế bào Lactobacillus rhamnosus) 400mg, Cao Hoàng bá 150mg, Cao Đan sâm 150mg, Magnesi lactat dihydrat (tương đương 9mg Magnesi) 90mg, Cao Hoàng đằng 75mg, Cao Natto (từ đậu tương lên men) 75mg, L-Carnitin fumarat 37,5mg. Phụ liệu: lactose, CPC, talc, silicon dioxid, magnesi stearat, povidon, HPMC, pouceau 4R, tartrazin yellow, PVA, PEG, titan dioxyd, polysorbate 80.",
    usage: "Ngày dùng 2-4 viên, chia 2 lần. Trước bữa ăn 30 phút hoặc sau ăn 1 giờ. Nên dùng liên tục 3-6 tháng. Không dùng cho người máu khó đông, người phẫu thuật, phụ nữ mang thai, rong kinh. XNCB: 4348/2021/ĐKSP.",
    benefits: "Hỗ trợ hoạt huyết, tăng cường lưu thông khí huyết, giảm mỡ máu, giảm nguy cơ xơ vữa động mạch, bảo vệ tim mạch.",
  },
  {
    id: 16,
    name: "Jointlink Max",
    slug: "jointlink-max",
    category: "bao-ve-suc-khoe",
    prices: { normal: 530182, silver: 461455, gold: 412364, super_gold: 363273 },
    points: 155,
    image: "/images/products/jointlink.jpg",
    description: "Thực phẩm bảo vệ sức khỏe Jointlink® Max - hỗ trợ xương khớp.",
    ingredients: "Mỗi viên nén: IMCDeltaImmune (vách tế bào vi khuẩn Lactobacillus rhamnosus) 400mg, Cao Bạch truật 300mg, Cao Khương hoạt 185mg, Cao Dây đau xương 105mg, Bột Khương hoàng 75mg, Chiết xuất Nhân sâm Ấn Độ 37,5mg, Cao Cam thảo bắc 37,5mg, Cao Sinh khương 30mg, Vitamin K2 (Menaquinone-7) 7,5mcg. Phụ liệu: Magnesi carbonate, cellulose vi tinh thể, màng bao CPC, silicon dioxid, talc, magnesi stearat, ethyl cellulose, màu thực phẩm tartrazine.",
    usage: "Ngày dùng 2-4 viên, chia 2 lần. Trước bữa ăn 30 phút hoặc sau ăn 1 giờ. Nên dùng liên tục 3-6 tháng. XNCB: 3478/2021/ĐKSP.",
    benefits: "Hỗ trợ giảm đau nhức xương khớp, hỗ trợ làm chậm quá trình thoái hóa khớp.",
  },
  {
    id: 17,
    name: "Lacttocol Max",
    slug: "lacttocol-max",
    category: "bao-ve-suc-khoe",
    prices: { normal: 441818, silver: 382909, gold: 343636, super_gold: 294545 },
    points: 130,
    image: "/images/products/lacttocol.jpg",
    description: "Thực phẩm bảo vệ sức khỏe Lacttocol® Max - hỗ trợ bảo vệ niêm mạc đại tràng, hỗ trợ tiêu hóa.",
    ingredients: "Mỗi viên nén: IMCDeltaImmune (vách tế bào vi khuẩn Lactobacillus rhamnosus) 400mg, Cao Bạch truật 135mg, Cao Bạch phục linh 60mg. Phụ liệu: Chất độn lactose, cellulose vi tinh thể, calci phosphat, tinh bột bắp; màng bao CPC; chất kết dính povidon; chất chống đông vón talc, magnesi stearat; màu thực phẩm sunset yellow.",
    usage: "Ngày dùng 2-4 viên, chia 2 lần. Trước bữa ăn 30 phút hoặc sau ăn 1 giờ. Nên dùng liên tục 3-6 tháng. XNCB: 3440/2021/ĐKSP. Không sử dụng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm.",
    benefits: "Hỗ trợ bảo vệ niêm mạc đại tràng và hỗ trợ làm giảm các triệu chứng của viêm đại tràng, rối loạn tiêu hóa.",
  },
  {
    id: 18,
    name: "Sữa tắm nữ",
    slug: "sua-tam-nu",
    category: "cham-soc-ca-nhan",
    prices: { normal: 352000, silver: 299000, gold: 255000, super_gold: 229000 },
    points: 100,
    image: "/images/products/sua-tam-nu.jpg",
    description: "Sữa tắm dành cho nữ, hương thơm nhẹ nhàng, dưỡng da mềm mịn.",
    ingredients: "Chiết xuất hoa hồng, Vitamin E, tinh dầu lavender, Glycerin, chiết xuất lô hội.",
    usage: "Lấy lượng vừa đủ, tạo bọt và massage nhẹ nhàng lên da, sau đó xả sạch.",
    benefits: "Làm sạch da dịu nhẹ, dưỡng ẩm, da mềm mịn, hương thơm quyến rũ.",
  },
  {
    id: 19,
    name: "Sữa tắm nam",
    slug: "sua-tam-nam",
    category: "cham-soc-ca-nhan",
    prices: { normal: 352000, silver: 299000, gold: 255000, super_gold: 229000 },
    points: 100,
    image: "/images/products/sua-tam-nam.jpg",
    description: "Sữa tắm dành cho nam, sảng khoái, năng động suốt ngày.",
    ingredients: "Than hoạt tính, tinh dầu bạc hà, Menthol, chiết xuất trà xanh, Glycerin.",
    usage: "Lấy lượng vừa đủ, tạo bọt và massage lên da, sau đó xả sạch.",
    benefits: "Làm sạch sâu, kiểm soát dầu thừa, sảng khoái, hương nam tính.",
  },
  {
    id: 20,
    name: "Green Quantum (Diệp lục)",
    slug: "green-quantum",
    category: "thuc-pham-bo-sung",
    prices: { normal: 192436, silver: 164945, gold: 133527, super_gold: 122727 },
    points: 54,
    image: "/images/products/diep-luc.jpg",
    description: "Green Quantum - Nước uống cô đặc diệp lục. Bổ sung chất xơ và diệp lục tố.",
    ingredients: "Nước tinh khiết, chất làm dày (glycerol, gôm xanthan), tảo Nannochloropsis sp. (lactose, tảo Nannochloropsis sp. tươi), arginin hydroclorid, chất chống oxy hóa (natri erythorbat), sodium copper chlorophyllin (chiết xuất diệp lục, chiết xuất từ cỏ Linh Lăng), PEG-40 hydrogenated castor oil, chất điều chỉnh độ acid (trinatri citrat), chất bảo quản (methyl paraben, kali sorbat), chất tạo hương tổng hợp (monoammonium glycyrrhizinate), tinh dầu bạc hà (peppermint oil), IMCDeltaimmune (vách tế bào Lactobacillus rhamnosus, maltodextrin, manitol), hương liệu tự nhiên (hương bạc hà). Thể tích thực: 150ml.",
    usage: "Sử dụng 1-3 lần/ngày, mỗi lần pha 3-5ml sản phẩm với 200ml nước lọc hoặc nước trái cây tùy khẩu vị, khuấy đều và thưởng thức. Lắc đều chai trước khi sử dụng. Nên sử dụng ngay sau khi pha. Bảo quản ngăn mát tủ lạnh và dùng trong 1 tháng sau khi mở chai. Dùng cho trẻ trên 3 tuổi và người lớn.",
    benefits: "Thanh lọc cơ thể, bổ sung chất xơ, hỗ trợ tiêu hóa, cung cấp diệp lục tố thiên nhiên.",
  },
  {
    id: 21,
    name: "Kidsmune Max",
    slug: "kidsmune-max",
    category: "bao-ve-suc-khoe",
    prices: { normal: 505636, silver: 451636, gold: 407455, super_gold: 378000 },
    points: 168,
    image: "/images/products/kidsmune.jpg",
    description: "Thực phẩm bảo vệ sức khỏe Kidsmune® Max - hỗ trợ miễn dịch cho trẻ em.",
    ingredients: "Mỗi gói: Inulin 405mg, IMCDelta-immune (vách tế bào Lactobacillus rhamnosus) 300mg, Sữa non (Colostrum) 200mg, Cao Hoàng kỳ 155mg, Cao Diếp cá 130mg, Galacto Oligosaccharide 90mg, L-Lysine (L-Lysine Hydrochloride) 50mg, Taurine 50mg, FOS 10mg, DHA 5mg, Kẽm (Zinc gluconate) 2mg, Lutein 1mg, Folic Acid 130mcg. Phụ liệu: sucrose, bột cacao, hương tổng hợp, silicon dioxid, caramel, povidon, sucralose.",
    usage: "Trẻ 3-4 tuổi: 1 gói/lần x 1-2 lần/ngày. Trẻ 5-9 tuổi: 1 gói/lần x 2-3 lần/ngày. Trẻ 10 tuổi trở lên: 2 gói/lần x 2 lần/ngày. Pha vào nước hoặc sữa. CBSP: 1415/2022/ĐKSP.",
    benefits: "Hỗ trợ tăng cường đề kháng, hỗ trợ tăng cường tiêu hóa, hỗ trợ giúp trẻ ăn ngon, nâng cao sức khỏe. Chứa Sữa non, Lysine, DHA, Kẽm giúp trẻ phát triển toàn diện.",
  },
  {
    id: 22,
    name: "Mindenergy Max",
    slug: "mindenergy-max",
    category: "bao-ve-suc-khoe",
    prices: { normal: 495818, silver: 446727, gold: 402545, super_gold: 373091 },
    points: 158,
    image: "/images/products/mindenergy.jpg",
    description: "Thực phẩm bảo vệ sức khỏe Mindenergy® Max - hỗ trợ não bộ, tăng cường trí nhớ.",
    ingredients: "Mỗi viên: Fibrinolytic enzyme từ ImmuBeans 450FU, DeltaImmune (vách tế bào Lactobacillus rhamnosus) 400mg, Cao Ngưu tất 125mg, Chiết xuất Bacopa monnieri 90mg, L-Carnitine (dạng L-Carnitine fumarate) 60mg, Cao Đinh lăng 55mg, DHA (Docosahexaenoic acid) 10mg. Phụ liệu: cellulose vi tinh thể, povidon, Opadry AMB II white, talc, silicon dioxid, magnesi stearat.",
    usage: "Ngày dùng 1 viên/lần x 1-3 lần/ngày. Uống khi đói: sau ăn 2 giờ hoặc trước ăn 30 phút. Uống nguyên viên. Hỏi ý kiến bác sĩ nếu đang chảy máu hoặc dùng thuốc chống đông máu. Phụ nữ có thai không nên sử dụng. CBSP: 1414/2022/ĐKSP.",
    benefits: "Hỗ trợ tăng cường và cải thiện trí nhớ, hỗ trợ làm giảm nguy cơ suy giảm trí nhớ.",
  },
  {
    id: 23,
    name: "Manlink Max",
    slug: "manlink-max",
    category: "bao-ve-suc-khoe",
    prices: { normal: 525818, silver: 463636, gold: 418545, super_gold: 354727 },
    points: 175,
    image: "/images/products/manlink.jpg",
    description: "Thực phẩm bảo vệ sức khỏe Man-Link® Max - hỗ trợ sức khỏe nam giới.",
    ingredients: "Mỗi viên: L-Arginine.HCl 450mg, IMCDeltaImmune (vách tế bào Lactobacillus rhamnosus) 150mg, Cao Bạch tật lê 90mg, Cao Dâm dương hoắc 75mg, Cao Ba kích 75mg, Fenugreek seed extract (chiết xuất hạt Cỏ cà ri) 75mg, Cao Nhân sâm 25mg, DHEA (Dehydroepiandrosterone) 10mg, Kẽm (dạng Zn Gluconate) 10mg, Đông trùng hạ thảo 5mg. Phụ liệu: Oxyd Magnesi, talc, magnesi stearat, silicon dioxid, Lactose, Opadry AMB red, cellulose vi tinh thể, crospovidon.",
    usage: "Ngày dùng 2-3 viên chia 2-3 lần. Trước bữa ăn 30 phút hoặc sau ăn 1 giờ. Không dùng cho người dưới 18 tuổi, người có tiền sử huyết áp cao, bệnh tim mạch, tiểu đường. CBSP: 1752/2022/ĐKSP.",
    benefits: "Hỗ trợ bổ thận tráng dương, hỗ trợ tăng cường sinh lực và cải thiện sinh lý ở nam giới.",
  },
  {
    id: 25,
    name: "VTopcan",
    slug: "vtopcan",
    category: "bao-ve-suc-khoe",
    prices: { normal: 8826545, silver: 7658182, gold: 6872727, super_gold: 6185455 },
    points: 2850,
    image: "/images/products/vtopcan.jpg",
    description: "Thực phẩm bảo vệ sức khỏe VTopcan - hỗ trợ chống oxy hóa, tăng cường sức đề kháng, nâng cao sức khỏe, giảm mệt mỏi.",
    ingredients: "Mỗi gói 15g chứa: Fucoidan 205mg, IMCDeltaImmune (vách tế bào vi khuẩn Lactobacillus rhamnosus) 100mg, Protein đậu nành chứa Lunasin 100mg, Cao Lá tre (Bambusa sp.) 50mg, Tảo Nannochloropsis sp. 25mg, Cao Sả (Cymbopogon citratus) 25mg, Cao Hoa đu đủ đực (Carica papaya) 5mg, Chiết xuất nấm Ngưu Chương chi (Antrodia cinnamomea extract) 5mg, Selen (dưới dạng Selenium yeast) 20mcg. Phụ liệu: Maltodextrin, chất tạo ngọt tự nhiên (mạch nha (xiro glucose từ ngô)), hương liệu thực phẩm tổng hợp (hương dưa lưới), chất điều chỉnh độ acid (citric acid), chất bảo quản (kali sorbate), chất làm dày (gellan gum), chất tạo màu tổng hợp (xanh green (Tartrazine, Brilliant blue FCF)).",
    usage: "Theo hướng dẫn chi tiết trên bao bì sản phẩm. Nên dùng liên tục 3-6 tháng. Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.",
    benefits: "Hỗ trợ chống oxy hóa, hỗ trợ tăng cường sức đề kháng, hỗ trợ nâng cao sức khỏe cho cơ thể, hỗ trợ giảm mệt mỏi.",
  },
  {
    id: 26,
    name: "VSportGel",
    slug: "vsportgel",
    category: "bao-ve-suc-khoe",
    prices: { normal: 1914545, silver: 1659273, gold: 1497273, super_gold: 1364727 },
    points: 620,
    image: "/images/products/vsportgel.jpg",
    description: "Thực phẩm bảo vệ sức khỏe VSportGel - hỗ trợ bổ sung L-carnitine, Taurine, Vitamin, khoáng chất và năng lượng, hỗ trợ giảm mệt mỏi.",
    ingredients: "Mỗi gói 15g chứa: L-Carnitine (dưới dạng L-Carnitine fumarate) 150mg, Taurine 150mg, Cao Đinh lăng (Polyscias fruticosa) 100mg (tương đương 650mg thảo mộc), L-Arginine (từ L-Arginine alpha ketoglutarate) 55mg, Magnesi (dưới dạng Magnesi clorid) 32mg, N.N-Dimethylglycine (DMG) 30mg, BCAA (chứa Leucine, Isoleucine, Valine) 25mg, D-Ribose 25mg, Citrulline (dưới dạng L-Citrulline DL-malate) 20mg, ElevATP (hỗn hợp chiết xuất táo và than bùn) 20mg, Natri clorid 9,6mg, Vitamin B5 (D-Calci pantothenat) 5mg, Tảo (Nannochloropsis sp.) 5mg, Kẽm (dưới dạng Kẽm gluconat) 1,5mg, Kali clorid 1,6mg, Vitamin B1 (Thiamin mononitrat) 0,3mg, Vitamin B6 (Pyridoxin hydroclorid) 0,3mg. Phụ liệu: chất tạo gel (mạch nha), maltodextrin, chất điều chỉnh độ acid (acid citric, trinatri citrat dihydrat), chất bảo quản (methyl parahydroxybenzoat, natri benzoat), hương liệu tổng hợp (hương ổi), chất chống oxy hóa (natri metabisulfit).",
    usage: "Uống 1-2 gói/lần x 1-2 lần/ngày. Trong giai đoạn cần tăng cường: 2-4 gói/lần. Có thể dùng trực tiếp hoặc hòa vào nước, trước hoặc sau tập luyện.",
    benefits: "Hỗ trợ phục hồi cơ khớp, tăng cường sức bền, hỗ trợ giảm mệt mỏi cho người vận động nhiều.",
  },
  {
    id: 27,
    name: "TOPAPRO (Bột Protein)",
    slug: "topapro",
    category: "thuc-pham-bo-sung",
    prices: { normal: 682364, silver: 603818, gold: 574364, super_gold: 540000 },
    points: 220,
    image: "/images/products/topapro.jpg",
    description: "Thực phẩm bổ sung TOPAPRO - Bột protein chất lượng cao, bổ sung dinh dưỡng và năng lượng.",
    ingredients: "Mỗi gói 25g chứa: Protein đậu Hà Lan, maltodextrin, kem thực vật (non dairy creamer), acid amin (lysin hydroclorid, threonin, histidin, leucin, valin, phenylalanin, isoleucin, methionin, tryptophan), chất làm dày (gôm gua, polyvinyl alcohol, gôm xanthan), hương liệu tổng hợp (hương dừa, hương vani, hương bánh quy), inulin, sucrose, natri clorid, ProteoSMART (hỗn hợp bột từ các loại hạt (hạt bí ngô, hạt hướng dương, hạt lanh) chứa protein cô đặc ≥ 57%) 200mg, hỗn hợp bột các hạt (gạo tẻ, đậu xanh, gạo lứt trắng, đậu Hà Lan, đậu lăng, đậu trắng, hạt sen, hạnh nhân, hạt bí đỏ, hạt óc chó), AminbioCer-VIDS (nấm men Saccharomyces cerevisiae thủy phân, maltodextrin) 150mg, bột tảo Chlorella pyrenoidosa, bột ca cao, Bio-She (Chiết xuất lá ổi, chiết xuất lá hương nhu, chiết xuất quả me rừng, chiết xuất lá Cà ri Ấn Độ, chiết xuất vỏ chanh) 60mg, chất chống đông vón (silicon dioxide), chất tạo ngọt (sucralose), kẽm bisglycinat.",
    usage: "Trẻ 3-5 tuổi: 1-2 gói/ngày. Trẻ 6-11 tuổi: 1 gói/lần x 1-3 lần/ngày. Trẻ trên 12 tuổi và người lớn: 1-2 gói/lần x 1-2 lần/ngày. Pha mỗi gói 25g với 150-250ml nước ấm, khuấy đều. Có thể pha với sữa, nước trái cây. Ngon hơn khi uống ấm.",
    benefits: "Bổ sung protein chất lượng cao, hỗ trợ phát triển cơ bắp, phục hồi sau tập luyện, bổ sung dinh dưỡng và năng lượng.",
  },
  {
    id: 28,
    name: "Nước tẩy trang Orico Micellar Water",
    slug: "nuoc-tay-trang",
    category: "cham-soc-da",
    prices: { normal: 587127, silver: 489927, gold: 440836, super_gold: 397636 },
    points: 185,
    image: "/images/products/nuoc-tay-trang.jpg",
    description: "Nước tẩy trang Orico Micellar Water - làm sạch sâu, dịu nhẹ cho da. Chứa Exo-P™ bảo vệ da trước ô nhiễm, bụi mịn, kim loại nặng và ánh sáng mặt trời.",
    ingredients: "Water (Nước Quantum), Babassu oil glycereth-8 esters, PEG-40 hydrogenated castor oil, PEG-7 glyceryl cocoate, Panthenol, Panax ginseng extract (Chiết xuất Sâm Triều Tiên), Alteromonas ferment extract (Chiết xuất lên men Alteromonas), Illicium verum (Anise) fruit extract (Chiết xuất quả Hồi), Calendula officinalis flower extract (Chiết xuất hoa Cúc kim tiền), Scutellaria baicalensis root extract (Chiết xuất rễ Hoàng cẩm), Sodium PCA, Allantoin, Tocopheryl acetate, Ascorbyl glucoside, 1,2-Hexanediol, Butylene glycol, Glycerin, Ethylhexylglycerin, Disodium EDTA, Citric acid, Phenoxyethanol, Potassium sorbate, Sodium benzoate, Fragrance. Không chứa cồn và chất bảo quản paraben.",
    usage: "Thấm nước tẩy trang lên bông cotton, lau nhẹ nhàng lên mặt cho đến khi sạch.",
    benefits: "Làm sạch lớp trang điểm hiệu quả, không gây khô da, dưỡng ẩm nhẹ với Vitamin B5 và Allantoin, phù hợp da nhạy cảm.",
  },
  {
    id: 29,
    name: "Nước hoa hồng Orico Toner",
    slug: "nuoc-hoa-hong-toner",
    category: "cham-soc-da",
    prices: { normal: 540000, silver: 451636, gold: 407455, super_gold: 368182 },
    points: 170,
    image: "/images/products/toner.jpg",
    description: "Nước hoa hồng Orico Toner - chứa Exo-P™ và nước Quantum, bước đệm không thể thiếu cho chế độ chăm sóc da hoàn chỉnh. Niacinamide giúp da sáng hơn.",
    ingredients: "Water (Nước Quantum), Propanediol, Niacinamide, Panax ginseng extract (Chiết xuất Sâm Triều Tiên), Alteromonas ferment extract (Chiết xuất lên men Alteromonas), Trifolium pratense (Clover) flower extract (Chiết xuất hoa Cỏ ba lá), Carica papaya (Papaya) fruit extract (Chiết xuất Quả đu đủ), Saccharide isomerate, Dihydroxypropyl arginine HCl, Allantoin, Sodium hyaluronate, Sodium PCA, Betaine, Glycerin, Butylene glycol, Isopentyldiol, Disodium EDTA, PEG-40 hydrogenated castor oil, Ethylhexylglycerin, Citric Acid, Sodium citrate, Phenoxyethanol, Sodium benzoate, Potassium sorbate, Fragrance. Không chứa cồn và chất bảo quản paraben.",
    usage: "Sau khi rửa mặt, thấm toner lên bông cotton hoặc tay, vỗ nhẹ lên da.",
    benefits: "Cân bằng pH da, làm sáng da với Niacinamide, cấp ẩm với Allantoin, tẩy tế bào chết nhẹ với chiết xuất Đu đủ, chuẩn bị da cho các bước dưỡng tiếp theo.",
  },
  {
    id: 30,
    name: "Sữa rửa mặt Orico Cleanser",
    slug: "sua-rua-mat",
    category: "cham-soc-da",
    prices: { normal: 378000, silver: 314182, gold: 284727, super_gold: 255273 },
    points: 115,
    image: "/images/products/sua-rua-mat.jpg",
    description: "Sữa rửa mặt Orico Cleanser - làm sạch an toàn từ dẫn xuất dầu dừa tự nhiên, nước Quantum, Sâm Triều Tiên và Exo-P™. Không chứa sulfate và paraben.",
    ingredients: "Water (Nước Quantum), Sodium cocoyl isethionate, Glycerin, Stearyl alcohol, Cocamidopropyl betaine, Sodium methyl cocoyl taurate, Glycol distearate, PEG-7 glyceryl cocoate, Panax ginseng extract (Chiết xuất Sâm Triều Tiên), Trifolium pratense (Clover) flower extract (Chiết xuất hoa cỏ ba lá), Alteromonas ferment extract (Chiết xuất lên men Alteromonas), Gluconolactone, Sodium PCA, Panthenol, Sodium hyaluronate, Betonite, Hydroxypropyl starch phosphate, Ethylhexylglycerin, Disodium EDTA, Isopentyldiol, Butylene glycol, Phenoxyethanol, Fragrance.",
    usage: "Lấy lượng vừa đủ, tạo bọt với nước, massage nhẹ nhàng lên mặt 1 phút rồi rửa sạch.",
    benefits: "Làm sạch tốt nhưng dịu nhẹ, loại bỏ bã nhờn, tẩy tế bào chết nhẹ với Gluconolactone, giữ ẩm với D-Panthenol và Sodium hyaluronate, phù hợp mọi loại da kể cả da nhạy cảm.",
  },
  {
    id: 31,
    name: "Kem chống nắng Orico Sun Screen",
    slug: "kem-chong-nang",
    category: "cham-soc-da",
    prices: { normal: 711818, silver: 561600, gold: 505636, super_gold: 456545 },
    points: 210,
    image: "/images/products/kem-chong-nang.jpg",
    description: "Kem chống nắng Orico Sun Screen - chứa Lingostem™ (tế bào gốc dâu Lingoberry), Sâm Triều Tiên, Astaxanthin kết hợp Vỏ cây Tô mộc, ngăn ngừa lão hóa sớm, nám sạm, nếp nhăn do ánh nắng.",
    ingredients: "Water (Nước Quantum), Cyclopentasiloxane, Ethylhexyl methoxycinnamate, Titanium dioxide, Diethylamino hydroxybenzoyl hexyl benzoate, PEG/PPG-20/15 dimethicone, Zinc oxide, Methylene bis-benzotriazolyl tetramethylbutylphenol, Propanediol, Caprylyl methicone, Quaternium-18 bentonite, PEG-10 dimethicone, Panax ginseng extract (Chiết xuất Sâm Triều Tiên), Caesalpinia sappan bark extract (Chiết xuất vỏ cây Tô mộc), Alteromonas ferment extract (Chiết xuất lên men Alteromonas), Vaccinium vitis-idaea fruit extract, Diisopropyl sebacate, Silica, Polymethylsilsesquioxane, Sodium hyaluronate, Propylene glycol dicaprylate/dicaprate, Polyglyceryl-3 polyricinoleate, Sodium chloride, Trimethylsiloxysilicate, C12-15 alkyl benzoate, Diisopropyl adipate, Decyl glucoside, Hydrated silica, Hydrogen dimethicone, CI 77019 (Mica), Polyglyceryl-3 diisostearate, Dimethicone/Vinyl dimethicone crosspolymer, Aluminum hydroxide, Ethylhexylglycerin, Disodium EDTA, Butylene glycol, Astaxanthin, CI 77491, Propylene glycol, Xanthan gum, Pentylene glycol, Triethoxycaprylylsilane, CI 77492, 1,2-Hexanediol, Glycerin, Gluconolactone, Citric acid, Phenoxyethanol, Sodium benzoate, Calcium gluconate, Fragrance.",
    usage: "Thoa đều lên da mặt và vùng da tiếp xúc ánh nắng trước 15-20 phút. Thoa lại mỗi 2-3 giờ.",
    benefits: "Bảo vệ da khỏi tia UVA/UVB, ngăn ngừa lão hóa sớm do nắng, hạn chế nám sạm và nếp nhăn, dưỡng ẩm và làm sáng da với Astaxanthin và Tô mộc.",
  },
  {
    id: 32,
    name: "Kem dưỡng da Orico Cream",
    slug: "kem-duong-da",
    category: "cham-soc-da",
    prices: { normal: 1030909, silver: 890000, gold: 810000, super_gold: 730000 },
    points: 300,
    image: "/images/products/kem-duong.jpg",
    description: "Kem dưỡng da Orico Cream - kết hợp công nghệ hiện đại với thảo mộc thiên nhiên. Chứa Amitose HGA, TEGO Cosmo C 250, X50 Pure White Solution, Aquaxyl giúp làm mờ thâm nám, dưỡng trắng, dưỡng ẩm.",
    ingredients: "Water (Nước Quantum), Glycerin, Cyclopentasiloxane, Butylene glycol, Dimethicone, Polyacrylate crosspolymer-6, Hexyl 3-glyceryl ascorbate, Xylitylglucoside, Panax ginseng extract (Chiết xuất Sâm Triều Tiên), Alteromonas ferment extract (Chiết xuất lên men Alteromonas), 1-Methylhydantoin-2-Imide, Palmitoyl dipeptide-61 D-Leucine dipeptide-62 D-Alanine dipeptide-63 amide, Palmitoyl tripeptide-95 Norleucyl dipeptide-72 D-Phenylalanine SH-hexapeptide-15 SP amide, Allantoin, Sodium hyaluronate, Sodium PCA, Anhydroxylitol, Arachidyl glucoside, Bis-diglyceryl polyacyladipate-2, Isoamyl laurate, Xylitol, Isopropyl myristate, Arachidyl alcohol, Octyldodecyl myristate, Caprylyl glycol, Glyceryl caprylate, Behenyl alcohol, Glucose, t-Butyl alcohol, Hydroxyethyl acrylate/Sodium acryloyldimethyl taurate copolymer, Xanthan gum, Phenylpropanol, Polyvinyl alcohol, Ethylhexylglycerin, Phenoxyethanol, Lactic acid/Glycolic acid copolymer, Citric acid, Fragrance.",
    usage: "Thoa đều lên da mặt và cổ sau bước toner và serum. Dùng sáng và tối.",
    benefits: "Dưỡng ẩm sâu, chống lão hóa, làm sáng và đều màu da, làm mờ thâm nám sạm, cải thiện nếp nhăn, cho da mềm mịn tươi sáng.",
  },
];

export const products: Product[] = rawProducts.map((p) => {
  const meta = productMetaLookup(p.slug);
  return {
    ...p,
    origin: meta.origin,
    manufacturer: meta.manufacturer,
    distributor: meta.distributor,
    registration: meta.registration,
  };
});

// Lazy require to keep metadata in a separate editable file
function productMetaLookup(slug: string) {
  const fallback = {
    origin: "Việt Nam",
    manufacturer: "Đang cập nhật",
    distributor: "Công ty Cổ phần Tập đoàn Liên kết Việt Nam (Vinalink Group)",
    registration: "Đang cập nhật",
  };
  try {

    const meta = require("./product-meta").productMeta[slug];
    return meta || fallback;
  } catch {
    return fallback;
  }
}

export function formatPrice(price: number): string {
  return price.toLocaleString("vi-VN");
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
