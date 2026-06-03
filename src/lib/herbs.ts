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
    key: "dan-sam",
    name: "Đan sâm",
    scientificName: "Salvia miltiorrhiza",
    image: "/images/herbs/dan-sam.jpg",
    benefit:
      "Vị thuốc quý cho tim mạch. Giúp hoạt huyết, làm giãn mạch vành, tăng lưu lượng máu đến tim, hạ mỡ máu và chống hình thành cục máu đông. Được Đông y dùng để dưỡng tâm, an thần.",
  },
  "hoang-ba": {
    key: "hoang-ba",
    name: "Hoàng bá",
    scientificName: "Phellodendron amurense",
    image: "/images/herbs/hoang-ba.jpg",
    benefit:
      "Vỏ cây Hoàng bá có vị đắng, tính hàn. Chứa Berberin giúp kháng khuẩn, chống viêm, thanh nhiệt giải độc. Hỗ trợ hạ huyết áp và bảo vệ thành mạch.",
  },
  "natto": {
    key: "natto",
    name: "Natto (đậu tương lên men)",
    scientificName: "Bacillus subtilis natto",
    image: "/images/herbs/natto.jpg",
    benefit:
      "Đậu tương lên men theo phương pháp truyền thống Nhật Bản, chứa enzyme Nattokinase nổi tiếng giúp làm tan cục máu đông, lưu thông máu, hỗ trợ phòng ngừa tai biến và nhồi máu cơ tim.",
  },
  "nhan-sam": {
    key: "nhan-sam",
    name: "Nhân sâm",
    scientificName: "Panax ginseng",
    image: "/images/herbs/nhan-sam.jpg",
    benefit:
      "Vua của các loại thảo dược. Chứa Ginsenosides giúp đại bổ nguyên khí, tăng cường sinh lực, chống mệt mỏi, nâng cao sức đề kháng và cải thiện trí nhớ, sự tập trung.",
  },
  "dam-duong-hoac": {
    key: "dam-duong-hoac",
    name: "Dâm dương hoắc",
    scientificName: "Epimedium",
    image: "/images/herbs/dam-duong-hoac.jpg",
    benefit:
      "Thảo dược nổi tiếng cho sức khỏe phái mạnh. Chứa Icariin giúp tăng cường sinh lý nam, bổ thận tráng dương, cải thiện tuần hoàn máu và giảm mệt mỏi.",
  },
  "dong-trung-ha-thao": {
    key: "dong-trung-ha-thao",
    name: "Đông trùng hạ thảo",
    scientificName: "Ophiocordyceps sinensis",
    image: "/images/herbs/dong-trung-ha-thao.jpg",
    benefit:
      "Dược liệu quý hiếm bậc nhất. Bồi bổ cơ thể, tăng cường sinh lực và sức bền, nâng cao miễn dịch, hỗ trợ chức năng phổi và thận, chống lão hóa.",
  },
  "linh-chi": {
    key: "linh-chi",
    name: "Linh chi",
    scientificName: "Ganoderma lingzhi",
    image: "/images/herbs/linh-chi.jpg",
    benefit:
      "Nấm trường thọ. Chứa Polysaccharides và Triterpenes giúp tăng cường miễn dịch, chống oxy hóa mạnh, bảo vệ gan, ổn định huyết áp và hỗ trợ giấc ngủ.",
  },
  "dinh-lang": {
    key: "dinh-lang",
    name: "Đinh lăng",
    scientificName: "Polyscias fruticosa",
    image: "/images/herbs/dinh-lang.jpg",
    benefit:
      "Được mệnh danh 'nhân sâm của người nghèo'. Giúp tăng cường tuần hoàn não, cải thiện trí nhớ, giảm căng thẳng mệt mỏi, lợi sữa và bồi bổ cơ thể.",
  },
  "bacopa": {
    key: "bacopa",
    name: "Bacopa (Rau đắng biển)",
    scientificName: "Bacopa monnieri",
    image: "/images/herbs/bacopa.jpg",
    benefit:
      "Thảo dược vàng cho não bộ. Chứa Bacosides giúp tăng cường trí nhớ, khả năng học hỏi và tập trung, bảo vệ tế bào thần kinh, giảm lo âu căng thẳng.",
  },
  "bach-truat": {
    key: "bach-truat",
    name: "Bạch truật",
    scientificName: "Atractylodes macrocephala",
    image: "/images/herbs/bach-truat.jpg",
    benefit:
      "Vị thuốc bổ tỳ vị hàng đầu. Giúp kiện tỳ, tăng cường tiêu hóa, lợi tiểu, cầm mồ hôi và nâng cao thể trạng. Hỗ trợ giảm đau nhức xương khớp.",
  },
  "hoang-ky": {
    key: "hoang-ky",
    name: "Hoàng kỳ",
    scientificName: "Astragalus membranaceus",
    image: "/images/herbs/hoang-ky.jpg",
    benefit:
      "Vị thuốc bổ khí nổi tiếng. Tăng cường hệ miễn dịch, bồi bổ cơ thể suy nhược, bảo vệ tim mạch và gan, chống lão hóa và hỗ trợ làm lành vết thương.",
  },
  "diep-ca": {
    key: "diep-ca",
    name: "Diếp cá",
    scientificName: "Houttuynia cordata",
    image: "/images/herbs/diep-ca.jpg",
    benefit:
      "Thảo dược mát lành. Có tác dụng thanh nhiệt giải độc, kháng khuẩn, kháng viêm, tăng cường miễn dịch và hỗ trợ tiêu hóa. Đặc biệt tốt cho trẻ em.",
  },
};

// ============================================================
// GÁN THẢO DƯỢC CHO TỪNG SẢN PHẨM (theo slug)
// Chỉ cần liệt kê các key thảo dược có hình ảnh + công dụng.
// ============================================================
export const PRODUCT_HERBS: Record<string, string[]> = {
  "cardiopro-max": ["dan-sam", "hoang-ba", "natto"],
  "manlink-max": ["nhan-sam", "dam-duong-hoac", "dong-trung-ha-thao"],
  "genecel-max": ["linh-chi"],
  "mindenergy-max": ["dinh-lang", "bacopa"],
  "jointlink-max": ["bach-truat"],
  "kidsmune-max": ["hoang-ky", "diep-ca"],
  "vhealth-socola": ["hoang-ky"],
  "vhealth-tra-xanh": ["hoang-ky"],
};

export function getHerbsForProduct(slug: string): Herb[] {
  const keys = PRODUCT_HERBS[slug] || [];
  return keys.map((k) => HERBS[k]).filter(Boolean);
}
