// ============================================================
// THƯ VIỆN THẢO DƯỢC - Hình ảnh + công dụng từng vị thuốc
// Khóa theo key thảo dược. Tiếng Việt có dấu.
// Cách thêm: thêm 1 entry vào HERBS, rồi gán key vào PRODUCT_HERBS.
// ============================================================

export interface Herb {
  key: string;
  name: string;
  scientificName: string;
  image: string;
  benefit: string;
}

export const HERBS: Record<string, Herb> = {
  "dan-sam": {
    key: "dan-sam", name: "Đan sâm", scientificName: "Salvia miltiorrhiza",
    image: "/images/herbs/dan-sam.jpg",
    benefit: "Vị thuốc quý cho tim mạch. Giúp hoạt huyết, làm giãn mạch vành, tăng lưu lượng máu đến tim, hạ mỡ máu và chống hình thành cục máu đông. Đông y dùng để dưỡng tâm, an thần.",
  },
  "hoang-ba": {
    key: "hoang-ba", name: "Hoàng bá", scientificName: "Phellodendron amurense",
    image: "/images/herbs/hoang-ba.jpg",
    benefit: "Vỏ cây Hoàng bá vị đắng, tính hàn. Chứa Berberin giúp kháng khuẩn, chống viêm, thanh nhiệt giải độc. Hỗ trợ hạ huyết áp và bảo vệ thành mạch.",
  },
  "natto": {
    key: "natto", name: "Natto (đậu tương lên men)", scientificName: "Bacillus subtilis natto",
    image: "/images/herbs/natto.jpg",
    benefit: "Đậu tương lên men theo phương pháp truyền thống Nhật Bản, chứa enzyme Nattokinase nổi tiếng giúp làm tan cục máu đông, lưu thông máu, hỗ trợ phòng ngừa tai biến và nhồi máu cơ tim.",
  },
  "nhan-sam": {
    key: "nhan-sam", name: "Nhân sâm", scientificName: "Panax ginseng",
    image: "/images/herbs/nhan-sam.jpg",
    benefit: "Vua của các loại thảo dược. Chứa Ginsenosides giúp đại bổ nguyên khí, tăng cường sinh lực, chống mệt mỏi, nâng cao sức đề kháng và cải thiện trí nhớ, sự tập trung.",
  },
  "dam-duong-hoac": {
    key: "dam-duong-hoac", name: "Dâm dương hoắc", scientificName: "Epimedium",
    image: "/images/herbs/dam-duong-hoac.jpg",
    benefit: "Thảo dược nổi tiếng cho sức khỏe phái mạnh. Chứa Icariin giúp tăng cường sinh lý nam, bổ thận tráng dương, cải thiện tuần hoàn máu và giảm mệt mỏi.",
  },
  "dong-trung-ha-thao": {
    key: "dong-trung-ha-thao", name: "Đông trùng hạ thảo", scientificName: "Ophiocordyceps sinensis",
    image: "/images/herbs/dong-trung-ha-thao.jpg",
    benefit: "Dược liệu quý hiếm bậc nhất. Bồi bổ cơ thể, tăng cường sinh lực và sức bền, nâng cao miễn dịch, hỗ trợ chức năng phổi và thận, chống lão hóa.",
  },
  "linh-chi": {
    key: "linh-chi", name: "Linh chi", scientificName: "Ganoderma lingzhi",
    image: "/images/herbs/linh-chi.jpg",
    benefit: "Nấm trường thọ. Chứa Polysaccharides và Triterpenes giúp tăng cường miễn dịch, chống oxy hóa mạnh, bảo vệ gan, ổn định huyết áp và hỗ trợ giấc ngủ.",
  },
  "dinh-lang": {
    key: "dinh-lang", name: "Đinh lăng", scientificName: "Polyscias fruticosa",
    image: "/images/herbs/dinh-lang.jpg",
    benefit: "Được mệnh danh 'nhân sâm của người nghèo'. Giúp tăng cường tuần hoàn não, cải thiện trí nhớ, giảm căng thẳng mệt mỏi, lợi sữa và bồi bổ cơ thể.",
  },
  "bacopa": {
    key: "bacopa", name: "Bacopa (Rau đắng biển)", scientificName: "Bacopa monnieri",
    image: "/images/herbs/bacopa.jpg",
    benefit: "Thảo dược vàng cho não bộ. Chứa Bacosides giúp tăng cường trí nhớ, khả năng học hỏi và tập trung, bảo vệ tế bào thần kinh, giảm lo âu căng thẳng.",
  },
  "bach-truat": {
    key: "bach-truat", name: "Bạch truật", scientificName: "Atractylodes macrocephala",
    image: "/images/herbs/bach-truat.jpg",
    benefit: "Vị thuốc bổ tỳ vị hàng đầu. Giúp kiện tỳ, tăng cường tiêu hóa, lợi tiểu, cầm mồ hôi và nâng cao thể trạng. Hỗ trợ giảm đau nhức xương khớp.",
  },
  "hoang-ky": {
    key: "hoang-ky", name: "Hoàng kỳ", scientificName: "Astragalus membranaceus",
    image: "/images/herbs/hoang-ky.jpg",
    benefit: "Vị thuốc bổ khí nổi tiếng. Tăng cường hệ miễn dịch, bồi bổ cơ thể suy nhược, bảo vệ tim mạch và gan, chống lão hóa và hỗ trợ làm lành vết thương.",
  },
  "diep-ca": {
    key: "diep-ca", name: "Diếp cá", scientificName: "Houttuynia cordata",
    image: "/images/herbs/diep-ca.jpg",
    benefit: "Thảo dược mát lành. Thanh nhiệt giải độc, kháng khuẩn, kháng viêm, tăng cường miễn dịch và hỗ trợ tiêu hóa. Đặc biệt tốt cho trẻ em.",
  },
  "bach-tat-le": {
    key: "bach-tat-le", name: "Bạch tật lê", scientificName: "Tribulus terrestris",
    image: "/images/herbs/bach-tat-le.jpg",
    benefit: "Thảo dược tăng cường nội tiết tố nam. Hỗ trợ sản sinh testosterone tự nhiên, tăng cường sinh lực, cải thiện chức năng sinh lý và sức bền cơ bắp.",
  },
  "nguu-tat": {
    key: "nguu-tat", name: "Ngưu tất", scientificName: "Achyranthes bidentata",
    image: "/images/herbs/nguu-tat.jpg",
    benefit: "Giúp hoạt huyết, thông kinh mạch, bổ can thận, mạnh gân cốt. Hỗ trợ tuần hoàn máu lên não và giảm đau nhức xương khớp.",
  },
  "dang-sam": {
    key: "dang-sam", name: "Đảng sâm", scientificName: "Codonopsis pilosula",
    image: "/images/herbs/dang-sam.jpg",
    benefit: "Được ví như 'nhân sâm bình dân'. Bổ tỳ, ích khí, sinh tân dịch, tăng cường thể lực và sức đề kháng, bồi bổ cơ thể suy nhược, mệt mỏi.",
  },
  "nam-chaga": {
    key: "nam-chaga", name: "Nấm Chaga", scientificName: "Inonotus obliquus",
    image: "/images/herbs/nam-chaga.jpg",
    benefit: "Nấm dược liệu vùng Siberia lạnh giá. Chứa hàm lượng chất chống oxy hóa cực cao, tăng cường miễn dịch, bảo vệ tế bào và hỗ trợ kiểm soát đường huyết.",
  },
  "sa": {
    key: "sa", name: "Sả", scientificName: "Cymbopogon citratus",
    image: "/images/herbs/sa.jpg",
    benefit: "Thảo mộc thơm quen thuộc. Hỗ trợ tiêu hóa, giải cảm, kháng khuẩn, giải độc cơ thể và thư giãn tinh thần. Giàu tinh dầu có lợi.",
  },
  "du-du": {
    key: "du-du", name: "Hoa đu đủ đực", scientificName: "Carica papaya",
    image: "/images/herbs/du-du.jpg",
    benefit: "Chứa nhiều enzyme và hợp chất quý. Hỗ trợ chống oxy hóa, tăng cường miễn dịch, hỗ trợ tiêu hóa và được dân gian dùng hỗ trợ sức khỏe toàn diện.",
  },
  "nghe": {
    key: "nghe", name: "Khương hoàng (Nghệ)", scientificName: "Curcuma longa",
    image: "/images/herbs/nghe.jpg",
    benefit: "Chứa Curcumin nổi tiếng. Chống viêm, chống oxy hóa mạnh, hỗ trợ tiêu hóa, bảo vệ gan, làm lành tổn thương và hỗ trợ xương khớp.",
  },
  "bach-thuoc": {
    key: "bach-thuoc", name: "Bạch thược", scientificName: "Paeonia lactiflora",
    image: "/images/herbs/bach-thuoc.jpg",
    benefit: "Vị thuốc bổ huyết, dưỡng âm. Giúp điều hòa kinh nguyệt, giảm đau, làm dịu thần kinh và hỗ trợ chức năng gan, làm đẹp da.",
  },
  "co-ca-ri": {
    key: "co-ca-ri", name: "Cỏ cà ri (Fenugreek)", scientificName: "Trigonella foenum-graecum",
    image: "/images/herbs/co-ca-ri.jpg",
    benefit: "Hạt giàu dưỡng chất. Hỗ trợ tăng cường nội tiết tố, cải thiện sinh lực nam giới, hỗ trợ kiểm soát đường huyết và tốt cho tiêu hóa.",
  },
  "cam-thao": {
    key: "cam-thao", name: "Cam thảo", scientificName: "Glycyrrhiza uralensis",
    image: "/images/herbs/cam-thao.jpg",
    benefit: "Vị thuốc điều hòa trong các bài thuốc. Giải độc, kháng viêm, làm dịu, bổ tỳ vị và hài hòa các vị thuốc khác trong công thức.",
  },
  "tho-phuc-linh": {
    key: "tho-phuc-linh", name: "Thổ phục linh", scientificName: "Smilax glabra",
    image: "/images/herbs/tho-phuc-linh.jpg",
    benefit: "Vị thuốc giải độc gan hàng đầu. Thanh nhiệt, trừ thấp, giải độc cơ thể, hỗ trợ điều trị mẩn ngứa, mề đay và bảo vệ chức năng gan.",
  },
  "kho-sam": {
    key: "kho-sam", name: "Khổ sâm", scientificName: "Sophora flavescens",
    image: "/images/herbs/kho-sam.jpg",
    benefit: "Vị đắng, tính hàn. Thanh nhiệt, táo thấp, kháng khuẩn, chống viêm và hỗ trợ điều hòa nhịp tim, bảo vệ tế bào.",
  },
  "la-tre": {
    key: "la-tre", name: "Lá tre", scientificName: "Bambusa sp.",
    image: "/images/herbs/la-tre.jpg",
    benefit: "Giàu Silica và chất chống oxy hóa. Thanh nhiệt, lợi tiểu, giải độc, hỗ trợ hạ sốt và làm mát cơ thể.",
  },
  "hoang-dang": {
    key: "hoang-dang", name: "Hoàng đằng", scientificName: "Fibraurea tinctoria",
    image: "/images/herbs/hoang-dang.jpg",
    benefit: "Rễ và thân có màu vàng đặc trưng, giàu Palmatin và Berberin. Thanh nhiệt, kháng khuẩn, chống viêm, hỗ trợ tiêu hóa và bảo vệ thành mạch tim.",
  },
  "thong-do": {
    key: "thong-do", name: "Thông đỏ (Pine bark)", scientificName: "Taxus wallichiana",
    image: "/images/herbs/thong-do.jpg",
    benefit: "Dược liệu quý chứa chất chống oxy hóa mạnh (OPC, Taxol). Bảo vệ tế bào, chống lão hóa, tăng cường tuần hoàn và hỗ trợ sức khỏe tim mạch.",
  },
  "khuong-hoat": {
    key: "khuong-hoat", name: "Khương hoạt", scientificName: "Notopterygium incisum",
    image: "/images/herbs/khuong-hoat.jpg",
    benefit: "Vị thuốc trừ phong thấp hàng đầu. Giúp giảm đau nhức xương khớp, đau mỏi vai gáy, khu phong tán hàn và hỗ trợ vận động linh hoạt.",
  },
  "day-dau-xuong": {
    key: "day-dau-xuong", name: "Dây đau xương", scientificName: "Tinospora sinensis",
    image: "/images/herbs/day-dau-xuong.jpg",
    benefit: "Như tên gọi, là khắc tinh của đau nhức xương khớp. Khu phong trừ thấp, mạnh gân cốt, hỗ trợ giảm đau lưng, đau khớp và phục hồi vận động.",
  },
  "la-chay": {
    key: "la-chay", name: "Lá chay", scientificName: "Artocarpus tonkinensis",
    image: "/images/herbs/la-chay.jpg",
    benefit: "Cây thuốc quý của Việt Nam. Hỗ trợ điều hòa miễn dịch, kháng viêm, giảm đau xương khớp và được nghiên cứu hỗ trợ sức khỏe toàn diện.",
  },
  "ba-kich": {
    key: "ba-kich", name: "Ba kích", scientificName: "Morinda officinalis",
    image: "/images/herbs/ba-kich.jpg",
    benefit: "Rễ củ màu tím đặc trưng, vị thuốc bổ thận tráng dương nổi tiếng. Tăng cường sinh lực nam giới, mạnh gân cốt, giảm đau lưng mỏi gối và chống mệt mỏi.",
  },
};

// ============================================================
// GÁN THẢO DƯỢC CHO TỪNG SẢN PHẨM (theo slug)
// ============================================================
export const PRODUCT_HERBS: Record<string, string[]> = {
  "caphelink": ["la-chay", "hoang-ky", "nam-chaga"],
  "bach-xuan": ["nhan-sam", "linh-chi", "dong-trung-ha-thao"],
  "vhealth-socola": ["hoang-ky", "dang-sam", "nam-chaga"],
  "vhealth-tra-xanh": ["hoang-ky", "dang-sam", "nam-chaga"],
  "genecel-max": ["linh-chi", "bach-thuoc", "kho-sam", "thong-do"],
  "detoxmune-max": ["tho-phuc-linh"],
  "cardiopro-max": ["dan-sam", "hoang-ba", "hoang-dang", "natto"],
  "jointlink-max": ["bach-truat", "khuong-hoat", "day-dau-xuong", "nghe", "cam-thao"],
  "lacttocol-max": ["bach-truat", "tho-phuc-linh"],
  "mindenergy-max": ["dinh-lang", "bacopa", "nguu-tat"],
  "manlink-max": ["nhan-sam", "dam-duong-hoac", "ba-kich", "dong-trung-ha-thao", "bach-tat-le", "co-ca-ri"],
  "kidsmune-max": ["hoang-ky", "diep-ca"],
  "vtopcan": ["la-tre", "sa", "du-du"],
  "vsportgel": ["dinh-lang"],
  "oricode-sam": ["nhan-sam"],
  "nuoc-tay-trang": ["nhan-sam"],
  "nuoc-hoa-hong-toner": ["nhan-sam", "du-du"],
  "sua-rua-mat": ["nhan-sam"],
  "kem-chong-nang": ["nhan-sam"],
  "kem-duong-da": ["nhan-sam"],
};

export function getHerbsForProduct(slug: string): Herb[] {
  const keys = PRODUCT_HERBS[slug] || [];
  return keys.map((k) => HERBS[k]).filter(Boolean);
}
