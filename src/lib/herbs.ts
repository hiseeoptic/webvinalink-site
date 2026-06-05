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
  benefit: string; // Tóm tắt ngắn (hiển thị khi thu gọn)
  detail?: string; // Phân tích sâu: vì sao có trong sản phẩm (hiển thị khi mở rộng)
}

export const HERBS: Record<string, Herb> = {
  "dan-sam": {
    key: "dan-sam", name: "Đan sâm", scientificName: "Salvia miltiorrhiza",
    image: "/images/herbs/dan-sam.jpg",
    benefit: "Vị thuốc quý cho tim mạch. Giúp hoạt huyết, làm giãn mạch vành, tăng lưu lượng máu đến tim, hạ mỡ máu và chống hình thành cục máu đông. Đông y dùng để dưỡng tâm, an thần.",
    detail: "Đan sâm chứa Tanshinone và Salvianolic acid — hai hoạt chất được nghiên cứu nhiều về tim mạch. Trong Cardiopro Max, Đan sâm là 'chủ lực' theo Đông y: hoạt huyết hóa ứ, làm giãn động mạch vành và tăng tưới máu cơ tim. Nó cộng hưởng với Cao Natto (làm tan cục máu đông) tạo nên cơ chế kép — vừa khơi thông dòng máu, vừa ngăn tắc nghẽn — đúng mục tiêu hỗ trợ tim mạch và giảm nguy cơ xơ vữa của sản phẩm.",
  },
  "hoang-ba": {
    key: "hoang-ba", name: "Hoàng bá", scientificName: "Phellodendron amurense",
    image: "/images/herbs/hoang-ba.jpg",
    benefit: "Vỏ cây Hoàng bá vị đắng, tính hàn. Chứa Berberin giúp kháng khuẩn, chống viêm, thanh nhiệt giải độc. Hỗ trợ hạ huyết áp và bảo vệ thành mạch.",
    detail: "Berberin trong Hoàng bá được chứng minh giúp giảm cholesterol và đường huyết — hai yếu tố nguy cơ chính của bệnh tim mạch. Trong Cardiopro Max, Hoàng bá đảm nhận vai trò 'thanh nhiệt, hạ hỏa', làm dịu tình trạng viêm trong lòng mạch và hỗ trợ kiểm soát mỡ máu. Cùng với Hoàng đằng, nó tạo lớp bảo vệ chống viêm cho thành động mạch.",
  },
  "natto": {
    key: "natto", name: "Natto (đậu tương lên men)", scientificName: "Bacillus subtilis natto",
    image: "/images/herbs/natto.jpg",
    benefit: "Đậu tương lên men theo phương pháp truyền thống Nhật Bản, chứa enzyme Nattokinase nổi tiếng giúp làm tan cục máu đông, lưu thông máu, hỗ trợ phòng ngừa tai biến và nhồi máu cơ tim.",
    detail: "Nattokinase là enzyme tiêu sợi huyết (fibrinolytic) mạnh, có khả năng phân giải fibrin — thành phần tạo nên cục máu đông. Trong Cardiopro Max, Cao Natto chính là 'mũi nhọn Tây y': trực tiếp làm tan và ngăn ngừa huyết khối gây tắc mạch — nguyên nhân hàng đầu của đột quỵ và nhồi máu cơ tim. Đây là lý do sản phẩm khuyến cáo thận trọng với người máu khó đông hoặc chuẩn bị phẫu thuật.",
  },
  "nhan-sam": {
    key: "nhan-sam", name: "Nhân sâm", scientificName: "Panax ginseng",
    image: "/images/herbs/nhan-sam.jpg",
    benefit: "Vua của các loại thảo dược. Chứa Ginsenosides giúp đại bổ nguyên khí, tăng cường sinh lực, chống mệt mỏi, nâng cao sức đề kháng và cải thiện trí nhớ, sự tập trung.",
    detail: "Ginsenosides trong Nhân sâm là nhóm saponin quý giúp tăng cường thể lực và trí lực toàn diện. Trong Man-Link Max, Nhân sâm 'đại bổ nguyên khí' — bổ sung năng lượng nền tảng cho cơ thể, giúp phái mạnh không chỉ cải thiện sinh lý mà còn dẻo dai, bền sức. Trong mỹ phẩm Orico, chiết xuất Sâm giúp nuôi dưỡng và làm sáng da. Đây là vị thuốc 'bổ gốc' xuất hiện trong nhiều sản phẩm cao cấp Vinalink.",
  },
  "dam-duong-hoac": {
    key: "dam-duong-hoac", name: "Dâm dương hoắc", scientificName: "Epimedium",
    image: "/images/herbs/dam-duong-hoac.jpg",
    benefit: "Thảo dược nổi tiếng cho sức khỏe phái mạnh. Chứa Icariin giúp tăng cường sinh lý nam, bổ thận tráng dương, cải thiện tuần hoàn máu và giảm mệt mỏi.",
    detail: "Icariin — hoạt chất chính của Dâm dương hoắc — hoạt động tương tự cơ chế giãn mạch, tăng lưu lượng máu đến cơ quan sinh dục. Trong Man-Link Max, Dâm dương hoắc phối hợp tuyệt vời với L-Arginine (tiền chất NO giúp giãn mạch) và Ba kích (bổ thận): một bên tăng ham muốn và cương cứng tức thời, một bên bồi bổ tận gốc — đúng triết lý 'trị cả ngọn lẫn gốc' của Vinalink.",
  },
  "dong-trung-ha-thao": {
    key: "dong-trung-ha-thao", name: "Đông trùng hạ thảo", scientificName: "Ophiocordyceps sinensis",
    image: "/images/herbs/dong-trung-ha-thao.jpg",
    benefit: "Dược liệu quý hiếm bậc nhất. Bồi bổ cơ thể, tăng cường sinh lực và sức bền, nâng cao miễn dịch, hỗ trợ chức năng phổi và thận, chống lão hóa.",
    detail: "Đông trùng hạ thảo chứa Cordycepin và Adenosine giúp tăng sản sinh năng lượng ATP và cải thiện chức năng thận theo Đông y. Trong Man-Link Max, dù hàm lượng nhỏ (5mg) nhưng đây là 'tinh chất quý' nâng tầm sản phẩm: bổ thận, tráng dương và tăng sức bền tổng thể, giúp phái mạnh duy trì phong độ bền lâu chứ không chỉ nhất thời.",
  },
  "linh-chi": {
    key: "linh-chi", name: "Linh chi", scientificName: "Ganoderma lingzhi",
    image: "/images/herbs/linh-chi.jpg",
    benefit: "Nấm trường thọ. Chứa Polysaccharides và Triterpenes giúp tăng cường miễn dịch, chống oxy hóa mạnh, bảo vệ gan, ổn định huyết áp và hỗ trợ giấc ngủ.",
    detail: "Beta-glucan và Triterpene trong Linh chi kích hoạt tế bào miễn dịch và chống oxy hóa tế bào. Trong Genecel Max, Linh chi cộng hưởng với DeltaImmune và chiết xuất Thông đỏ để tạo 'bộ ba chống lão hóa': bảo vệ tế bào khỏi gốc tự do, hỗ trợ tái tạo và kéo dài tuổi thọ tế bào. Đây là nền tảng giúp Genecel hướng đến mục tiêu trẻ hóa từ cấp độ tế bào.",
  },
  "dinh-lang": {
    key: "dinh-lang", name: "Đinh lăng", scientificName: "Polyscias fruticosa",
    image: "/images/herbs/dinh-lang.jpg",
    benefit: "Được mệnh danh 'nhân sâm của người nghèo'. Giúp tăng cường tuần hoàn não, cải thiện trí nhớ, giảm căng thẳng mệt mỏi, lợi sữa và bồi bổ cơ thể.",
    detail: "Đinh lăng chứa saponin (tương tự nhân sâm), vitamin nhóm B và nhiều axit amin. Trong Mindenergy Max, Đinh lăng tăng cường tuần hoàn máu não, giúp tế bào thần kinh được nuôi dưỡng tốt hơn — phối hợp với Bacopa (tăng trí nhớ) và Ngưu tất (dẫn máu lên não). Trong VSportGel, Đinh lăng lại giúp giảm mệt mỏi và phục hồi thể lực cho người vận động.",
  },
  "bacopa": {
    key: "bacopa", name: "Bacopa (Rau đắng biển)", scientificName: "Bacopa monnieri",
    image: "/images/herbs/bacopa.jpg",
    benefit: "Thảo dược vàng cho não bộ. Chứa Bacosides giúp tăng cường trí nhớ, khả năng học hỏi và tập trung, bảo vệ tế bào thần kinh, giảm lo âu căng thẳng.",
    detail: "Bacosides trong Bacopa monnieri được nghiên cứu lâm sàng về khả năng cải thiện trí nhớ và tốc độ xử lý thông tin. Trong Mindenergy Max, Bacopa là thành phần 'chủ lực hiện đại' cho não bộ: bảo vệ và kích thích đầu mút thần kinh (synapse), giảm stress oxy hóa ở não. Kết hợp với enzyme tiêu sợi huyết và DHA, sản phẩm hỗ trợ cả tuần hoàn lẫn chức năng ghi nhớ.",
  },
  "bach-truat": {
    key: "bach-truat", name: "Bạch truật", scientificName: "Atractylodes macrocephala",
    image: "/images/herbs/bach-truat.jpg",
    benefit: "Vị thuốc bổ tỳ vị hàng đầu. Giúp kiện tỳ, tăng cường tiêu hóa, lợi tiểu, cầm mồ hôi và nâng cao thể trạng. Hỗ trợ giảm đau nhức xương khớp.",
    detail: "Bạch truật là vị thuốc 'kiện tỳ' số một trong Đông y. Trong Jointlink Max (hàm lượng cao 300mg), Bạch truật trừ thấp — loại bỏ 'thấp khí' tích tụ ở khớp, vốn là nguyên nhân gây sưng đau theo y lý cổ truyền. Trong Lacttocol Max, cùng Bạch phục linh, nó kiện tỳ và bảo vệ niêm mạc đường ruột, giảm rối loạn tiêu hóa. Một vị thuốc, hai vai trò tùy công thức.",
  },
  "hoang-ky": {
    key: "hoang-ky", name: "Hoàng kỳ", scientificName: "Astragalus membranaceus",
    image: "/images/herbs/hoang-ky.jpg",
    benefit: "Vị thuốc bổ khí nổi tiếng. Tăng cường hệ miễn dịch, bồi bổ cơ thể suy nhược, bảo vệ tim mạch và gan, chống lão hóa và hỗ trợ làm lành vết thương.",
    detail: "Hoàng kỳ chứa Astragaloside và polysaccharide giúp kích thích sản sinh và hoạt hóa tế bào miễn dịch. Trong Kidsmune Max, Hoàng kỳ (155mg) là vị bổ khí chủ lực giúp trẻ tăng đề kháng, ít ốm vặt. Trong VHealth và Caphelink, Hoàng kỳ bồi bổ khí huyết, chống mệt mỏi. Nó là 'lá chắn' Đông y bổ trợ hoàn hảo cho DeltaImmune trong việc nâng cao sức đề kháng.",
  },
  "diep-ca": {
    key: "diep-ca", name: "Diếp cá", scientificName: "Houttuynia cordata",
    image: "/images/herbs/diep-ca.jpg",
    benefit: "Thảo dược mát lành. Thanh nhiệt giải độc, kháng khuẩn, kháng viêm, tăng cường miễn dịch và hỗ trợ tiêu hóa. Đặc biệt tốt cho trẻ em.",
    detail: "Diếp cá chứa Quercetin và tinh dầu kháng khuẩn tự nhiên, lành tính với trẻ nhỏ. Trong Kidsmune Max, Diếp cá (130mg) thanh nhiệt, hỗ trợ hệ tiêu hóa và hô hấp của trẻ — hai hệ thường gặp vấn đề ở trẻ nhỏ. Kết hợp với Sữa non (Colostrum) và Hoàng kỳ, sản phẩm vừa làm mát, vừa tăng đề kháng giúp trẻ ăn ngon, ít ốm.",
  },
  "bach-tat-le": {
    key: "bach-tat-le", name: "Bạch tật lê", scientificName: "Tribulus terrestris",
    image: "/images/herbs/bach-tat-le.jpg",
    benefit: "Thảo dược tăng cường nội tiết tố nam. Hỗ trợ sản sinh testosterone tự nhiên, tăng cường sinh lực, cải thiện chức năng sinh lý và sức bền cơ bắp.",
    detail: "Bạch tật lê chứa Protodioscin (saponin) kích thích cơ thể tự sản sinh testosterone nội sinh. Trong Man-Link Max (90mg — hàm lượng thảo dược cao nhất), Bạch tật lê là vị 'tăng lực' nền tảng: nâng nồng độ hormone nam tự nhiên, từ đó cải thiện ham muốn, khối cơ và sức bền — an toàn hơn so với bổ sung hormone trực tiếp.",
  },
  "nguu-tat": {
    key: "nguu-tat", name: "Ngưu tất", scientificName: "Achyranthes bidentata",
    image: "/images/herbs/nguu-tat.jpg",
    benefit: "Giúp hoạt huyết, thông kinh mạch, bổ can thận, mạnh gân cốt. Hỗ trợ tuần hoàn máu lên não và giảm đau nhức xương khớp.",
    detail: "Ngưu tất có đặc tính 'dẫn thuốc đi xuống' và hoạt huyết theo Đông y. Trong Mindenergy Max, Ngưu tất đóng vai trò 'dẫn đường': tăng cường lưu thông và đưa máu giàu dưỡng chất lên não, giúp các hoạt chất khác (Bacopa, DHA, Đinh lăng) phát huy tác dụng tốt hơn. Đây là mắt xích quan trọng trong cơ chế cải thiện tuần hoàn não của sản phẩm.",
  },
  "dang-sam": {
    key: "dang-sam", name: "Đảng sâm", scientificName: "Codonopsis pilosula",
    image: "/images/herbs/dang-sam.jpg",
    benefit: "Được ví như 'nhân sâm bình dân'. Bổ tỳ, ích khí, sinh tân dịch, tăng cường thể lực và sức đề kháng, bồi bổ cơ thể suy nhược, mệt mỏi.",
    detail: "Đảng sâm bổ khí, kiện tỳ tương tự Nhân sâm nhưng tính ôn hòa hơn, phù hợp dùng hàng ngày. Trong VHealth (Socola/Trà xanh), Đảng sâm cùng Hoàng kỳ và Nấm Chaga tạo nền tảng bồi bổ khí huyết, giúp người dùng ăn ngon, tăng thể lực — biến VHealth từ một bữa ăn dinh dưỡng thành thực phẩm bổ dưỡng đúng nghĩa.",
  },
  "nam-chaga": {
    key: "nam-chaga", name: "Nấm Chaga", scientificName: "Inonotus obliquus",
    image: "/images/herbs/nam-chaga.jpg",
    benefit: "Nấm dược liệu vùng Siberia lạnh giá. Chứa hàm lượng chất chống oxy hóa cực cao, tăng cường miễn dịch, bảo vệ tế bào và hỗ trợ kiểm soát đường huyết.",
    detail: "Nấm Chaga có chỉ số chống oxy hóa (ORAC) thuộc hàng cao nhất trong tự nhiên, giàu Beta-glucan và SOD. Trong VHealth và Caphelink, Nấm Chaga bổ sung 'lớp giáp' chống gốc tự do và hỗ trợ miễn dịch, biến đồ uống dinh dưỡng hàng ngày thành sản phẩm vừa ngon vừa bảo vệ sức khỏe — đúng tinh thần 'thực phẩm là thuốc' của Vinalink.",
  },
  "sa": {
    key: "sa", name: "Sả", scientificName: "Cymbopogon citratus",
    image: "/images/herbs/sa.jpg",
    benefit: "Thảo mộc thơm quen thuộc. Hỗ trợ tiêu hóa, giải cảm, kháng khuẩn, giải độc cơ thể và thư giãn tinh thần. Giàu tinh dầu có lợi.",
    detail: "Sả chứa Citral và Geraniol — tinh dầu có khả năng kháng khuẩn, kháng nấm và chống oxy hóa. Trong VTopcan, Sả hỗ trợ thanh lọc, giải độc cơ thể và tạo hương vị dễ chịu, đồng thời cộng hưởng với Nấm ngưu chương chi trong việc bảo vệ gan và đường tiêu hóa — giúp cơ thể đào thải độc tố hiệu quả hơn khi đang phục hồi.",
  },
  "du-du": {
    key: "du-du", name: "Hoa đu đủ đực", scientificName: "Carica papaya",
    image: "/images/herbs/du-du.jpg",
    benefit: "Chứa nhiều enzyme và hợp chất quý. Hỗ trợ chống oxy hóa, tăng cường miễn dịch, hỗ trợ tiêu hóa và được dân gian dùng hỗ trợ sức khỏe toàn diện.",
    detail: "Hoa đu đủ đực giàu phenolic, flavonoid và các enzyme như papain. Dân gian Việt Nam từ lâu dùng hoa đu đủ đực để hỗ trợ sức khỏe cho người suy nhược. Trong VTopcan, thành phần này bổ sung nhóm chất chống oxy hóa thực vật (phytochemical) đa dạng, cộng hưởng cùng Fucoidan và Lunasin tạo nên 'hàng rào' bảo vệ tế bào nhiều tầng — đặc trưng của triết lý kết hợp Đông-Tây y Vinalink.",
  },
  "nghe": {
    key: "nghe", name: "Khương hoàng (Nghệ)", scientificName: "Curcuma longa",
    image: "/images/herbs/nghe.jpg",
    benefit: "Chứa Curcumin nổi tiếng. Chống viêm, chống oxy hóa mạnh, hỗ trợ tiêu hóa, bảo vệ gan, làm lành tổn thương và hỗ trợ xương khớp.",
    detail: "Curcumin trong Khương hoàng (Nghệ) là chất kháng viêm tự nhiên mạnh. Trong Jointlink Max, Nghệ giảm phản ứng viêm tại khớp — nguyên nhân trực tiếp gây sưng đau và thoái hóa. Nó phối hợp với Khương hoạt và Dây đau xương (trừ phong thấp) để vừa giảm đau, vừa làm chậm quá trình thoái hóa khớp từ bên trong.",
  },
  "bach-thuoc": {
    key: "bach-thuoc", name: "Bạch thược", scientificName: "Paeonia lactiflora",
    image: "/images/herbs/bach-thuoc.jpg",
    benefit: "Vị thuốc bổ huyết, dưỡng âm. Giúp điều hòa kinh nguyệt, giảm đau, làm dịu thần kinh và hỗ trợ chức năng gan, làm đẹp da.",
    detail: "Bạch thược chứa Paeoniflorin giúp dưỡng huyết, làm dịu và chống oxy hóa. Trong Bách Xuân, Bạch thược là 1 trong 4 vị của bài Tứ Vật Thang kinh điển — nó 'liễm âm, dưỡng huyết', giữ cho máu được nuôi dưỡng và điều hòa, làm dịu các vị hoạt huyết mạnh (Đương quy, Xuyên khung) để cân bằng công thức. Trong Genecel Max, Bạch thược bổ huyết, dưỡng âm, hỗ trợ làn da và làm chậm lão hóa.",
  },
  "co-ca-ri": {
    key: "co-ca-ri", name: "Cỏ cà ri (Fenugreek)", scientificName: "Trigonella foenum-graecum",
    image: "/images/herbs/co-ca-ri.jpg",
    benefit: "Hạt giàu dưỡng chất. Hỗ trợ tăng cường nội tiết tố, cải thiện sinh lực nam giới, hỗ trợ kiểm soát đường huyết và tốt cho tiêu hóa.",
    detail: "Hạt Cỏ cà ri (Fenugreek) chứa saponin furostanolic được chứng minh hỗ trợ duy trì nồng độ testosterone và ham muốn. Trong Man-Link Max, Cỏ cà ri bổ trợ cho Bạch tật lê và Ba kích — cùng nhóm tăng cường nội tiết tố nam, tạo hiệu ứng cộng hưởng giúp cải thiện sinh lực và sức bền cho phái mạnh.",
  },
  "cam-thao": {
    key: "cam-thao", name: "Cam thảo", scientificName: "Glycyrrhiza uralensis",
    image: "/images/herbs/cam-thao.jpg",
    benefit: "Vị thuốc điều hòa trong các bài thuốc. Giải độc, kháng viêm, làm dịu, bổ tỳ vị và hài hòa các vị thuốc khác trong công thức.",
    detail: "Cam thảo bắc được mệnh danh 'quốc lão' của Đông y — có mặt trong hầu hết bài thuốc cổ phương với vai trò 'điều hòa'. Trong Jointlink Max, Cam thảo vừa kháng viêm nhẹ, vừa làm dịu và 'hòa giải' các vị thuốc mạnh (Khương hoạt, Nghệ), giúp công thức êm dịu với dạ dày và phát huy tác dụng hài hòa hơn.",
  },
  "tho-phuc-linh": {
    key: "tho-phuc-linh", name: "Thổ phục linh", scientificName: "Smilax glabra",
    image: "/images/herbs/tho-phuc-linh.jpg",
    benefit: "Vị thuốc giải độc gan hàng đầu. Thanh nhiệt, trừ thấp, giải độc cơ thể, hỗ trợ điều trị mẩn ngứa, mề đay và bảo vệ chức năng gan.",
    detail: "Thổ phục linh chứa flavonoid và saponin có khả năng giải độc, trừ thấp nhiệt. Trong Detoxmune Max (hàm lượng cao 375mg), Thổ phục linh là vị 'trị gốc' chủ lực: hỗ trợ gan đào thải độc tố, làm sạch cơ thể — đặc biệt hiệu quả với người hay bị mẩn ngứa, mề đay, nóng gan do uống nhiều rượu bia. Nó cộng hưởng với DeltaImmune và ALA để bảo vệ tế bào gan toàn diện.",
  },
  "kho-sam": {
    key: "kho-sam", name: "Khổ sâm", scientificName: "Sophora flavescens",
    image: "/images/herbs/kho-sam.jpg",
    benefit: "Vị đắng, tính hàn. Thanh nhiệt, táo thấp, kháng khuẩn, chống viêm và hỗ trợ điều hòa nhịp tim, bảo vệ tế bào.",
    detail: "Khổ sâm chứa các alkaloid (matrine, oxymatrine) có hoạt tính chống oxy hóa và bảo vệ tế bào. Trong Genecel Max, Khổ sâm bắc thanh nhiệt và hỗ trợ thải độc, làm 'sạch' môi trường tế bào để các thành phần tái tạo (Linh chi, Thông đỏ, DeltaImmune) hoạt động hiệu quả hơn trong mục tiêu chống lão hóa.",
  },
  "la-tre": {
    key: "la-tre", name: "Lá tre", scientificName: "Bambusa sp.",
    image: "/images/herbs/la-tre.jpg",
    benefit: "Giàu Silica và chất chống oxy hóa. Thanh nhiệt, lợi tiểu, giải độc, hỗ trợ hạ sốt và làm mát cơ thể.",
    detail: "Cao Lá tre giàu flavonoid và Silica hữu cơ, có tác dụng thanh nhiệt, lợi tiểu và chống oxy hóa. Trong VTopcan (50mg), Lá tre giữ vai trò 'điều hòa' theo Đông y — làm mát, cân bằng cơ thể khi các thành phần bổ mạnh khác (Fucoidan, Nấm ngưu chương chi) hoạt động. Nó giúp cơ thể đào thải nhiệt độc, hỗ trợ thận và đường tiết niệu trong quá trình thanh lọc.",
  },
  "hoang-dang": {
    key: "hoang-dang", name: "Hoàng đằng", scientificName: "Fibraurea tinctoria",
    image: "/images/herbs/hoang-dang.jpg",
    benefit: "Rễ và thân có màu vàng đặc trưng, giàu Palmatin và Berberin. Thanh nhiệt, kháng khuẩn, chống viêm, hỗ trợ tiêu hóa và bảo vệ thành mạch tim.",
    detail: "Palmatin và Berberin trong Hoàng đằng có tác dụng kháng viêm và hỗ trợ chuyển hóa lipid. Trong Cardiopro Max, Hoàng đằng phối hợp với Hoàng bá để thanh nhiệt, chống viêm thành mạch và hỗ trợ kiểm soát mỡ máu — góp phần giảm nguy cơ xơ vữa động mạch, một trong những mục tiêu cốt lõi của sản phẩm tim mạch.",
  },
  "thong-do": {
    key: "thong-do", name: "Thông đỏ (Pine bark)", scientificName: "Taxus wallichiana",
    image: "/images/herbs/thong-do.jpg",
    benefit: "Dược liệu quý chứa chất chống oxy hóa mạnh (OPC, Taxol). Bảo vệ tế bào, chống lão hóa, tăng cường tuần hoàn và hỗ trợ sức khỏe tim mạch.",
    detail: "Chiết xuất vỏ Thông đỏ (Pine bark) giàu Proanthocyanidin (OPC) — chất chống oxy hóa mạnh gấp nhiều lần vitamin C và E. Trong Genecel Max, Thông đỏ là 'lá chắn chống lão hóa': bảo vệ tế bào và collagen khỏi gốc tự do, tăng cường vi tuần hoàn. Đây là thành phần Tây y hiện đại bổ trợ cho Linh chi và Bạch thược trong mục tiêu trẻ hóa của sản phẩm.",
  },
  "khuong-hoat": {
    key: "khuong-hoat", name: "Khương hoạt", scientificName: "Notopterygium incisum",
    image: "/images/herbs/khuong-hoat.jpg",
    benefit: "Vị thuốc trừ phong thấp hàng đầu. Giúp giảm đau nhức xương khớp, đau mỏi vai gáy, khu phong tán hàn và hỗ trợ vận động linh hoạt.",
    detail: "Khương hoạt chứa tinh dầu và coumarin có tác dụng giảm đau, kháng viêm. Trong Jointlink Max (185mg), Khương hoạt là vị 'trừ phong thấp' chủ lực — đặc trị các chứng đau nhức do thời tiết, đau mỏi vai gáy và khớp. Theo Đông y, nó 'đuổi' phong hàn thấp ra khỏi cơ thể, nguồn gốc gây đau khớp, kết hợp cùng Dây đau xương tạo bộ đôi giảm đau xương khớp mạnh mẽ.",
  },
  "day-dau-xuong": {
    key: "day-dau-xuong", name: "Dây đau xương", scientificName: "Tinospora sinensis",
    image: "/images/herbs/day-dau-xuong.jpg",
    benefit: "Như tên gọi, là khắc tinh của đau nhức xương khớp. Khu phong trừ thấp, mạnh gân cốt, hỗ trợ giảm đau lưng, đau khớp và phục hồi vận động.",
    detail: "Dây đau xương (Tinospora sinensis) chứa alkaloid và glycosid giúp kháng viêm, giảm đau và mạnh gân cốt. Cái tên đã nói lên công dụng — đây là vị thuốc dân gian kinh điển cho xương khớp. Trong Jointlink Max (105mg), nó phối hợp với Khương hoạt và Bạch truật để vừa giảm triệu chứng đau, vừa bồi bổ và phục hồi gân cốt, hỗ trợ vận động linh hoạt lâu dài.",
  },
  "la-chay": {
    key: "la-chay", name: "Lá chay", scientificName: "Artocarpus tonkinensis",
    image: "/images/herbs/la-chay.jpg",
    benefit: "Cây thuốc quý của Việt Nam. Hỗ trợ điều hòa miễn dịch, kháng viêm, giảm đau xương khớp và được nghiên cứu hỗ trợ sức khỏe toàn diện.",
    detail: "Lá chay (Artocarpus tonkinensis) là cây thuốc bản địa Việt Nam, được các viện nghiên cứu trong nước quan tâm về khả năng điều hòa miễn dịch và kháng viêm. Trong Caphelink, Lá chay kết hợp cùng Hoàng kỳ và Nấm Chaga, biến ly cà phê hàng ngày thành thức uống vừa tỉnh táo vừa hỗ trợ đề kháng — thể hiện tinh thần đưa dược liệu Việt vào sản phẩm tiêu dùng của Vinalink.",
  },
  "ba-kich": {
    key: "ba-kich", name: "Ba kích", scientificName: "Morinda officinalis",
    image: "/images/herbs/ba-kich.jpg",
    benefit: "Rễ củ màu tím đặc trưng, vị thuốc bổ thận tráng dương nổi tiếng. Tăng cường sinh lực nam giới, mạnh gân cốt, giảm đau lưng mỏi gối và chống mệt mỏi.",
    detail: "Ba kích chứa các anthraglycosid, iridoid và đường khử giúp kích thích sản sinh testosterone nội sinh. Trong Man-Link Max, Ba kích đóng vai trò 'trị gốc' theo Đông y: bổ thận dương, làm ấm và nuôi dưỡng tạng thận — gốc rễ của sinh lực phái mạnh. Kết hợp với Dâm dương hoắc và L-Arginine (giãn mạch), Ba kích giúp cải thiện sinh lý một cách bền vững thay vì chỉ kích thích tức thời.",
  },
  // ===== BÁCH XUÂN - Bài Tứ Vật Thang (bổ huyết cho phụ nữ) =====
  "duong-quy": {
    key: "duong-quy", name: "Đương quy", scientificName: "Angelica sinensis",
    image: "/images/herbs/duong-quy.jpg",
    benefit: "Được mệnh danh 'nhân sâm dành cho phụ nữ'. Bổ huyết, hoạt huyết, điều hòa kinh nguyệt, giảm đau bụng kinh và làm hồng hào da dẻ.",
    detail: "Đương quy là vị 'quân' (chủ dược) trong bài Tứ Vật Thang. Chứa Ligustilide và acid ferulic giúp vừa BỔ huyết (tạo máu) vừa HOẠT huyết (lưu thông máu). Trong Bách Xuân (hàm lượng cao nhất, tương đương 150mg thảo dược), Đương quy là trái tim của công thức: nuôi dưỡng và lưu thông khí huyết cho phụ nữ — gốc rễ của làn da hồng hào, kinh nguyệt đều và sức khỏe phái đẹp.",
  },
  "thuc-dia": {
    key: "thuc-dia", name: "Thục địa", scientificName: "Rehmannia glutinosa",
    image: "/images/herbs/thuc-dia.jpg",
    benefit: "Rễ Sinh địa chế biến chín, vị ngọt, tính ấm. Đại bổ âm huyết, bổ thận, sinh tân dịch, làm đen tóc và bồi bổ cơ thể suy nhược.",
    detail: "Thục địa (Sinh địa đã cửu chưng cửu sái - chín lần đồ chín lần phơi) là vị 'thần' bổ huyết, dưỡng âm mạnh nhất trong Tứ Vật Thang. Trong Bách Xuân, Thục địa bổ sung 'phần âm' và tân dịch cho cơ thể — bù đắp tình trạng thiếu máu, khô da, mệt mỏi thường gặp ở phụ nữ sau sinh hoặc tuổi tiền mãn kinh. Nó cộng hưởng với Đương quy tạo nền tảng bổ huyết vững chắc.",
  },
  "xuyen-khung": {
    key: "xuyen-khung", name: "Xuyên khung", scientificName: "Ligusticum chuanxiong",
    image: "/images/herbs/xuyen-khung.jpg",
    benefit: "Vị thuốc 'khí trong huyết'. Hoạt huyết, hành khí, khu phong giảm đau, đặc biệt hiệu quả với đau đầu, hoa mắt và rối loạn kinh nguyệt.",
    detail: "Xuyên khung được ví là 'khí dược trong huyết' — giúp đẩy khí và huyết lưu thông khắp cơ thể, kể cả lên đầu. Trong Bách Xuân, Xuyên khung giữ vai trò 'sứ': dẫn dắt và thúc đẩy ba vị bổ huyết kia vận hành, tránh tình trạng 'bổ mà trệ' (bổ nhiều gây ứ). Nó giúp giảm đau đầu, hoa mắt và đau bụng kinh — những triệu chứng do khí huyết kém lưu thông.",
  },
  "soy-isoflavone": {
    key: "soy-isoflavone", name: "Soy Isoflavone (Mầm đậu nành)", scientificName: "Glycine max",
    image: "/images/herbs/lunasin.jpg",
    benefit: "Tinh chất mầm đậu nành chứa Isoflavone - nội tiết tố nữ thực vật (phytoestrogen). Hỗ trợ cân bằng nội tiết, làm đẹp da và giảm triệu chứng tiền mãn kinh.",
    detail: "Isoflavone (Genistein, Daidzein) có cấu trúc tương tự estrogen nội sinh nên được gọi là 'estrogen thực vật'. Trong Bách Xuân, Soy isoflavone là điểm nhấn HIỆN ĐẠI bổ sung cho bài thuốc cổ: giúp bù đắp sự suy giảm nội tiết tố nữ theo tuổi tác, từ đó cải thiện làn da, vóc dáng, giảm bốc hỏa và các triệu chứng tiền mãn kinh — an toàn vì nguồn gốc thực vật.",
  },
  "loi-khuan": {
    key: "loi-khuan", name: "Lợi khuẩn (Probiotic)", scientificName: "Lactobacillus acidophilus & rhamnosus",
    image: "/images/herbs/lunasin.jpg",
    benefit: "Hai chủng lợi khuẩn 10⁸ CFU giúp cân bằng hệ vi sinh đường ruột, tăng cường tiêu hóa và hấp thu dưỡng chất.",
    detail: "Lactobacillus acidophilus và rhamnosus là hai lợi khuẩn quan trọng cho đường ruột. Trong Bách Xuân, lợi khuẩn đóng vai trò 'người vận chuyển': giúp hệ tiêu hóa khỏe mạnh để hấp thu tối đa các dưỡng chất bổ huyết và isoflavone. Đường ruột khỏe cũng liên quan mật thiết đến làn da và miễn dịch — yếu tố then chốt cho vẻ đẹp từ bên trong của phụ nữ.",
  },
  // ===== THÀNH PHẦN QUÝ (cho VTopcan & sản phẩm cao cấp) =====
  "fucoidan": {
    key: "fucoidan", name: "Fucoidan", scientificName: "Chiết xuất tảo nâu (Fucus / Mozuku)",
    image: "/images/herbs/fucoidan.jpg",
    benefit: "Hoạt chất quý từ tảo nâu biển sâu, là 'ngôi sao' trong hỗ trợ miễn dịch và chống oxy hóa. Được nghiên cứu nhiều tại Nhật Bản về khả năng hỗ trợ sức khỏe tế bào.",
    detail: "Fucoidan là một polysaccharide sulfate hóa chiết xuất từ tảo nâu (Mozuku, Kombu). Đây là thành phần có HÀM LƯỢNG CAO NHẤT trong VTopcan (205mg) — lý do sản phẩm thuộc phân khúc cao cấp nhất. Cơ chế: (1) Kích hoạt tế bào miễn dịch NK (Natural Killer) và đại thực bào; (2) Hỗ trợ quá trình apoptosis - 'tự chết' theo lập trình của tế bào bất thường; (3) Chống tạo mạch nuôi khối u; (4) Chống oxy hóa mạnh. Fucoidan chính là 'mũi nhọn' giúp VTopcan trở thành sản phẩm hỗ trợ nâng cao sức khỏe cho người cần chăm sóc đặc biệt.",
  },
  "lunasin": {
    key: "lunasin", name: "Lunasin (Protein đậu nành)", scientificName: "Glycine max",
    image: "/images/herbs/lunasin.jpg",
    benefit: "Peptide sinh học quý hiếm chiết từ đậu nành, được mệnh danh 'peptide phòng ngừa'. Hỗ trợ bảo vệ tế bào ở cấp độ gen.",
    detail: "Lunasin là một peptide 43 axit amin độc đáo trong đậu nành, được khoa học quan tâm đặc biệt vì khả năng tác động ở cấp độ biểu sinh (epigenetic). Trong VTopcan (100mg), Lunasin bổ trợ cho Fucoidan: nó đi vào nhân tế bào, giúp bảo vệ DNA khỏi tổn thương và điều hòa các gen liên quan đến viêm và phân chia tế bào. Đây là lý do VTopcan không chỉ 'tăng đề kháng' mà còn hướng đến bảo vệ cơ thể từ gốc rễ tế bào — phù hợp người cao tuổi, người cần phục hồi.",
  },
  "nam-nguu-chuong-chi": {
    key: "nam-nguu-chuong-chi", name: "Nấm Ngưu chương chi", scientificName: "Antrodia cinnamomea",
    image: "/images/herbs/nam-nguu-chuong-chi.jpg",
    benefit: "'Hồng ngọc trong rừng' của Đài Loan — loại nấm dược liệu cực hiếm, chỉ mọc trên cây long não. Bảo vệ gan và chống oxy hóa thuộc hàng đầu.",
    detail: "Nấm Ngưu chương chi (Antrodia cinnamomea) là dược liệu quý hiếm bậc nhất, giàu Triterpenoid và Polysaccharide đặc hữu. Dù hàm lượng nhỏ (5mg) nhưng đây là 'tinh chất vàng' của VTopcan: (1) Bảo vệ và giải độc gan mạnh — cơ quan trọng yếu khi cơ thể chống chọi bệnh tật; (2) Chống oxy hóa, kháng viêm; (3) Hỗ trợ ức chế tế bào bất thường. Sự góp mặt của loại nấm đắt đỏ này khẳng định đẳng cấp của VTopcan trong dòng sản phẩm bảo vệ sức khỏe chuyên sâu.",
  },
  "tao-bien": {
    key: "tao-bien", name: "Tảo Nannochloropsis", scientificName: "Nannochloropsis sp.",
    image: "/images/herbs/tao-bien.jpg",
    benefit: "Vi tảo biển giàu dinh dưỡng, chứa hàm lượng cao Omega-3 (EPA), protein và sắc tố chống oxy hóa tự nhiên.",
    detail: "Nannochloropsis là vi tảo biển siêu nhỏ nhưng giàu dưỡng chất bậc nhất: EPA (Omega-3), Astaxanthin, Zeaxanthin, vitamin và khoáng vi lượng. Trong VTopcan (25mg), tảo biển bổ sung nền tảng dinh dưỡng và chất chống oxy hóa, giúp nuôi dưỡng tế bào khỏe mạnh trong khi Fucoidan và Lunasin làm nhiệm vụ bảo vệ. Đây cũng là thành phần cốt lõi của công nghệ 'Cơ lượng tử' Vinalink với cấu trúc phân tử nhỏ dễ hấp thu.",
  },
};

// ============================================================
// GÁN THẢO DƯỢC CHO TỪNG SẢN PHẨM (theo slug)
// ============================================================
export const PRODUCT_HERBS: Record<string, string[]> = {
  "caphelink": ["la-chay", "hoang-ky", "nam-chaga"],
  "bach-xuan": ["duong-quy", "thuc-dia", "bach-thuoc", "xuyen-khung", "soy-isoflavone", "loi-khuan"],
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
  "vtopcan": ["fucoidan", "lunasin", "nam-nguu-chuong-chi", "tao-bien", "la-tre", "sa", "du-du"],
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
