// ============================================================
// THƯ VIỆN THẢO DƯỢC & HOẠT CHẤT - Hình ảnh + công dụng + cơ chế
// Khóa theo key. Tiếng Việt có dấu.
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
  // ===== HOẠT CHẤT MIỄN DỊCH CỐT LÕI (có trong hầu hết sản phẩm) =====
  "deltaimmune": {
    key: "deltaimmune", name: "IMCDeltaImmune®", scientificName: "Vách tế bào Lactobacillus rhamnosus (postbiotic)",
    image: "/images/herbs/loi-khuan.jpg",
    benefit: "Hoạt chất sinh học miễn dịch độc quyền, chiết xuất từ vách tế bào lợi khuẩn Lactobacillus rhamnosus (dạng 'postbiotic' — lợi khuẩn đã bất hoạt). Là 'nền tảng miễn dịch' chung của hầu hết sản phẩm bảo vệ sức khỏe Vinalink, giúp kích hoạt và 'huấn luyện' hệ miễn dịch tự nhiên.",
    detail: "DeltaImmune KHÔNG phải lợi khuẩn sống, mà là các mảnh VÁCH TẾ BÀO của Lactobacillus rhamnosus đã bất hoạt (postbiotic) — nhờ vậy rất ổn định, an toàn và không cần bảo quản lạnh như men vi sinh thông thường.\n\nCơ chế hoạt động: vách tế bào này mang những 'tín hiệu nhận diện vi khuẩn' (peptidoglycan, acid lipoteichoic, mảnh ADN vi khuẩn). Khi vào cơ thể, chúng gắn vào các 'thụ thể canh gác' (TLR2, NOD2...) nằm trên các tế bào miễn dịch bẩm sinh — đại thực bào, tế bào tua (dendritic) và đặc biệt là tế bào diệt tự nhiên NK (Natural Killer). Quá trình này giống như một buổi 'diễn tập' thường trực, giúp hệ miễn dịch luôn ở trạng thái cảnh giác: tăng khả năng thực bào (nuốt và tiêu diệt mầm bệnh), thúc đẩy sản sinh cytokine và bắc cầu sang miễn dịch thu được.\n\nĐây là lý do DeltaImmune được xem là 'xương sống miễn dịch' của Vinalink: nó nâng nền đề kháng tổng thể, để các thảo dược chuyên biệt (cho gan, tim, khớp, não, trẻ em...) phát huy tác dụng trên một cơ thể có hàng rào bảo vệ vững vàng hơn. Hàm lượng thay đổi theo sản phẩm: 400mg ở dòng Max (Genecel, Detoxmune, Cardiopro, Jointlink, Lacttocol, Mindenergy), 300mg ở Kidsmune (cho trẻ), 150mg ở Caphelink & Manlink, 100mg ở VTopcan.",
  },
  // ===== TIM MẠCH (Cardiopro Max) =====
  "dan-sam": {
    key: "dan-sam", name: "Đan sâm", scientificName: "Salvia miltiorrhiza",
    image: "/images/herbs/dan-sam.jpg",
    benefit: "Vị thuốc quý cho tim mạch. Giúp hoạt huyết, làm giãn mạch vành, tăng lưu lượng máu đến tim, hạ mỡ máu và chống hình thành cục máu đông. Đông y dùng để dưỡng tâm, an thần.",
    detail: "Đan sâm chứa hai nhóm hoạt chất được nghiên cứu nhiều về tim mạch: Tanshinone (tan trong dầu) và Salvianolic acid (tan trong nước). Theo Đông y, Đan sâm là vị 'quân' (chủ dược) của Cardiopro Max với công năng hoạt huyết hóa ứ — làm giãn động mạch vành, tăng tưới máu cơ tim và cải thiện vi tuần hoàn.\n\nVề cơ chế hiện đại, các hoạt chất này được ghi nhận giúp chống oxy hóa lớp nội mạc mạch máu, hạn chế kết tập tiểu cầu và bảo vệ tế bào cơ tim trước tình trạng thiếu máu cục bộ. Trong công thức, Đan sâm cộng hưởng trực tiếp với Cao Natto (làm tan cục máu đông) tạo nên cơ chế KÉP: một bên khơi thông và làm giãn dòng chảy, một bên ngăn tắc nghẽn — đúng mục tiêu hỗ trợ tim mạch và giảm nguy cơ xơ vữa của sản phẩm.",
  },
  "hoang-ba": {
    key: "hoang-ba", name: "Hoàng bá", scientificName: "Phellodendron amurense",
    image: "/images/herbs/hoang-ba.jpg",
    benefit: "Vỏ cây Hoàng bá vị đắng, tính hàn. Chứa Berberin giúp kháng khuẩn, chống viêm, thanh nhiệt giải độc. Hỗ trợ hạ huyết áp và bảo vệ thành mạch.",
    detail: "Hoạt chất chính của Hoàng bá là Berberin — một alkaloid được nghiên cứu rộng rãi cho thấy khả năng giúp giảm cholesterol và đường huyết, hai yếu tố nguy cơ hàng đầu của bệnh tim mạch. Berberin tác động lên enzyme AMPK trong chuyển hóa lipid và đường, đồng thời có đặc tính kháng viêm.\n\nTrong Cardiopro Max, Hoàng bá đảm nhận vai trò 'thanh nhiệt, hạ hỏa' theo Đông y: làm dịu tình trạng viêm âm ỉ trong lòng mạch — vốn là khởi đầu của quá trình xơ vữa — và hỗ trợ kiểm soát mỡ máu. Nó kết hợp với Hoàng đằng (cùng giàu Berberin/Palmatin) tạo thành lớp 'bảo vệ chống viêm' cho thành động mạch, bổ trợ cho tác dụng hoạt huyết của Đan sâm.",
  },
  "natto": {
    key: "natto", name: "Natto (đậu tương lên men)", scientificName: "Bacillus subtilis natto",
    image: "/images/herbs/natto.jpg",
    benefit: "Đậu tương lên men theo phương pháp truyền thống Nhật Bản, chứa enzyme Nattokinase nổi tiếng giúp làm tan cục máu đông, lưu thông máu, hỗ trợ phòng ngừa tai biến và nhồi máu cơ tim.",
    detail: "Nattokinase là enzyme tiêu sợi huyết (fibrinolytic) mạnh, được chiết từ món đậu tương lên men Natto của Nhật. Cơ chế đặc trưng: nó phân giải trực tiếp FIBRIN — loại sợi protein đan xen tạo nên cục máu đông — đồng thời hỗ trợ kích hoạt plasmin nội sinh của cơ thể (enzyme tự làm tan huyết khối).\n\nTrong Cardiopro Max, Cao Natto chính là 'mũi nhọn Tây y' của công thức: trực tiếp làm tan và ngăn ngừa huyết khối gây tắc mạch — nguyên nhân hàng đầu của đột quỵ và nhồi máu cơ tim. Khi đi cùng Đan sâm (giãn mạch, hoạt huyết), hai thành phần này bổ sung cho nhau ở hai khâu khác nhau của dòng máu. Cũng chính vì tác dụng làm loãng máu này mà sản phẩm khuyến cáo THẬN TRỌNG với người máu khó đông, đang dùng thuốc chống đông, chuẩn bị phẫu thuật hoặc phụ nữ mang thai/rong kinh.",
  },
  // ===== NAM GIỚI (Manlink Max) =====
  "nhan-sam": {
    key: "nhan-sam", name: "Nhân sâm", scientificName: "Panax ginseng",
    image: "/images/herbs/nhan-sam.jpg",
    benefit: "Vua của các loại thảo dược. Chứa Ginsenosides giúp đại bổ nguyên khí, tăng cường sinh lực, chống mệt mỏi, nâng cao sức đề kháng và cải thiện trí nhớ, sự tập trung.",
    detail: "Ginsenosides (saponin nhân sâm) là nhóm hoạt chất quý mang lại tác dụng 'adaptogen' — giúp cơ thể thích nghi và chống chọi với stress, mệt mỏi, đồng thời tăng cường thể lực và trí lực toàn diện. Chúng hỗ trợ chuyển hóa năng lượng tế bào và điều hòa trục thần kinh - nội tiết.\n\nTrong Man-Link Max, Nhân sâm giữ vai trò 'đại bổ nguyên khí' — bổ sung năng lượng nền tảng cho cơ thể, giúp phái mạnh không chỉ cải thiện sinh lý mà còn dẻo dai, bền sức và minh mẫn. Khác với các vị bổ thận 'trị ngọn', Nhân sâm bồi bổ tổng trạng để hiệu quả được duy trì lâu dài. Trong mỹ phẩm Orico, chiết xuất Sâm Triều Tiên lại được dùng để chống oxy hóa, nuôi dưỡng và làm sáng da — cho thấy đây là vị thuốc 'bổ gốc' đa năng có mặt ở nhiều dòng sản phẩm cao cấp Vinalink.",
  },
  "dam-duong-hoac": {
    key: "dam-duong-hoac", name: "Dâm dương hoắc", scientificName: "Epimedium",
    image: "/images/herbs/dam-duong-hoac.jpg",
    benefit: "Thảo dược nổi tiếng cho sức khỏe phái mạnh. Chứa Icariin giúp tăng cường sinh lý nam, bổ thận tráng dương, cải thiện tuần hoàn máu và giảm mệt mỏi.",
    detail: "Icariin — flavonoid đặc trưng của Dâm dương hoắc — được nghiên cứu cho thấy cơ chế tương tự nhóm thuốc ức chế PDE-5: giúp giãn mạch và tăng lưu lượng máu đến cơ quan sinh dục thông qua con đường NO/cGMP. Nó cũng hỗ trợ nồng độ testosterone và cải thiện tâm trạng, sinh lực.\n\nTrong Man-Link Max, Dâm dương hoắc phối hợp rất ăn ý với L-Arginine (tiền chất của NO giúp giãn mạch) và Ba kích (bổ thận): một bên tăng ham muốn và khả năng cương cứng khá nhanh, một bên bồi bổ tận gốc tạng thận. Đây chính là minh họa cho triết lý 'trị cả ngọn lẫn gốc' mà công thức nam giới của Vinalink hướng tới — vừa cải thiện nhanh, vừa bền vững.",
  },
  "dong-trung-ha-thao": {
    key: "dong-trung-ha-thao", name: "Đông trùng hạ thảo", scientificName: "Ophiocordyceps sinensis",
    image: "/images/herbs/dong-trung-ha-thao.jpg",
    benefit: "Dược liệu quý hiếm bậc nhất. Bồi bổ cơ thể, tăng cường sinh lực và sức bền, nâng cao miễn dịch, hỗ trợ chức năng phổi và thận, chống lão hóa.",
    detail: "Đông trùng hạ thảo chứa Cordycepin và Adenosine — các hoạt chất giúp tăng sản sinh năng lượng ATP ở cấp tế bào và cải thiện sử dụng oxy, từ đó nâng cao sức bền và khả năng phục hồi. Theo Đông y, nó bổ cả phế (phổi) lẫn thận, đại bổ khí huyết.\n\nTrong Man-Link Max, dù hàm lượng nhỏ (5mg) nhưng đây là 'tinh chất quý' nâng tầm sản phẩm: bổ thận, tráng dương và tăng sức bền tổng thể, giúp phái mạnh duy trì phong độ bền lâu chứ không chỉ nhất thời. Nó hiệp đồng với Nhân sâm (bổ khí) và nhóm bổ thận (Ba kích, Dâm dương hoắc) để vừa tăng năng lượng nền, vừa cải thiện sinh lực — phù hợp người trung niên hay mệt mỏi, suy giảm thể lực.",
  },
  // ===== CHỐNG LÃO HÓA / TẾ BÀO (Genecel Max) =====
  "linh-chi": {
    key: "linh-chi", name: "Linh chi", scientificName: "Ganoderma lingzhi",
    image: "/images/herbs/linh-chi.jpg",
    benefit: "Nấm trường thọ. Chứa Polysaccharides và Triterpenes giúp tăng cường miễn dịch, chống oxy hóa mạnh, bảo vệ gan, ổn định huyết áp và hỗ trợ giấc ngủ.",
    detail: "Hai nhóm hoạt chất chủ lực của Linh chi là Beta-glucan (polysaccharide) — kích hoạt tế bào miễn dịch — và Triterpene (acid ganoderic) — chống oxy hóa, kháng viêm và bảo vệ gan. Linh chi cũng được xem là 'adaptogen' giúp an thần, cải thiện giấc ngủ và điều hòa cơ thể.\n\nTrong Genecel Max, Linh chi cộng hưởng với chiết xuất Thông đỏ (giàu OPC) và DeltaImmune để tạo nên 'bộ ba chống lão hóa': bảo vệ tế bào và DNA khỏi tổn thương của gốc tự do, hỗ trợ tái tạo và kéo dài tuổi thọ tế bào. Trong khi Khổ sâm 'dọn sạch' môi trường và Bạch thược bổ huyết nuôi dưỡng, thì Linh chi giữ vai trò vừa bảo vệ vừa nâng đề kháng — nền tảng để Genecel hướng đến mục tiêu trẻ hóa từ cấp độ tế bào.",
  },
  "bach-thuoc": {
    key: "bach-thuoc", name: "Bạch thược", scientificName: "Paeonia lactiflora",
    image: "/images/herbs/bach-thuoc.jpg",
    benefit: "Vị thuốc bổ huyết, dưỡng âm. Giúp điều hòa kinh nguyệt, giảm đau, làm dịu thần kinh và hỗ trợ chức năng gan, làm đẹp da.",
    detail: "Hoạt chất chính của Bạch thược là Paeoniflorin, có tác dụng dưỡng huyết, chống oxy hóa, kháng viêm và làm dịu (giãn cơ trơn, giảm co thắt, an thần nhẹ). Đây là vị thuốc cổ điển để 'liễm âm, dưỡng huyết'.\n\nTrong Genecel Max, Bạch thược bổ huyết và dưỡng âm — nuôi dưỡng làn da và mô từ bên trong, hỗ trợ làm chậm lão hóa. Khi đi cùng các thành phần chống oxy hóa mạnh (Linh chi, Thông đỏ), Bạch thược đóng vai 'bổ và làm dịu', cân bằng công thức để vừa bảo vệ tế bào vừa nuôi dưỡng — thay vì chỉ tập trung 'chống' gốc tự do. Sự kết hợp bổ huyết + chống oxy hóa này là lý do sản phẩm hướng tới cả sức khỏe lẫn vẻ ngoài tươi trẻ.",
  },
  "kho-sam": {
    key: "kho-sam", name: "Khổ sâm", scientificName: "Sophora flavescens",
    image: "/images/herbs/kho-sam.jpg",
    benefit: "Vị đắng, tính hàn. Thanh nhiệt, táo thấp, kháng khuẩn, chống viêm và hỗ trợ điều hòa nhịp tim, bảo vệ tế bào.",
    detail: "Khổ sâm chứa các alkaloid đặc trưng là Matrine và Oxymatrine, được nghiên cứu về hoạt tính chống oxy hóa, kháng viêm và bảo vệ tế bào. Theo Đông y, vị đắng - tính hàn giúp thanh nhiệt, táo thấp và giải độc.\n\nTrong Genecel Max, Khổ sâm bắc giữ vai trò 'làm sạch': thanh nhiệt và hỗ trợ thải độc, tạo một môi trường tế bào 'sạch' để các thành phần tái tạo và bảo vệ (Linh chi, Thông đỏ, Bạch thược, DeltaImmune) hoạt động hiệu quả hơn. Có thể hình dung trong cơ chế 'làm sạch — bảo vệ — tái tạo' của sản phẩm, Khổ sâm phụ trách bước đầu tiên, dọn dẹp gánh nặng độc tố và viêm để quá trình chống lão hóa diễn ra thuận lợi.",
  },
  "thong-do": {
    key: "thong-do", name: "Thông đỏ (Pine bark)", scientificName: "Pinus / chiết xuất vỏ thông",
    image: "/images/herbs/thong-do.jpg",
    benefit: "Dược liệu quý chứa chất chống oxy hóa mạnh (OPC - Proanthocyanidin). Bảo vệ tế bào, chống lão hóa, tăng cường tuần hoàn và hỗ trợ sức khỏe tim mạch.",
    detail: "Chiết xuất vỏ Thông đỏ (Pine bark) giàu Proanthocyanidin oligomeric (OPC) — nhóm chất chống oxy hóa được ghi nhận mạnh gấp nhiều lần vitamin C và E, lại có khả năng tái sinh các vitamin chống oxy hóa khác. OPC còn hỗ trợ bảo vệ collagen, tăng độ bền thành mạch và cải thiện vi tuần hoàn.\n\nTrong Genecel Max, Thông đỏ là 'lá chắn chống lão hóa' hiện đại: trung hòa gốc tự do, bảo vệ màng tế bào và collagen của da khỏi quá trình oxy hóa — nguyên nhân cốt lõi của lão hóa. Đây là thành phần Tây y bổ trợ hoàn hảo cho Linh chi và Bạch thược (Đông y), tạo công thức chống lão hóa kết hợp Đông - Tây mà sản phẩm theo đuổi.",
  },
  // ===== NÃO BỘ (Mindenergy Max) =====
  "dinh-lang": {
    key: "dinh-lang", name: "Đinh lăng", scientificName: "Polyscias fruticosa",
    image: "/images/herbs/dinh-lang.jpg",
    benefit: "Được mệnh danh 'nhân sâm của người nghèo'. Giúp tăng cường tuần hoàn não, cải thiện trí nhớ, giảm căng thẳng mệt mỏi, lợi sữa và bồi bổ cơ thể.",
    detail: "Đinh lăng chứa saponin (cùng họ với saponin nhân sâm), vitamin nhóm B và nhiều axit amin thiết yếu, mang lại tác dụng bồi bổ và tăng cường tuần hoàn. Danh y Hải Thượng Lãn Ông từng coi trọng vị thuốc này.\n\nTrong Mindenergy Max, Đinh lăng tăng cường lưu thông máu lên não, giúp tế bào thần kinh được nuôi dưỡng tốt hơn và giảm mệt mỏi thần kinh — phối hợp với Bacopa (cải thiện trí nhớ) và Ngưu tất (dẫn máu lên não) tạo cơ chế 'nuôi não — tăng trí nhớ — dẫn máu'. Trong VSportGel, cùng hàm lượng cao (tương đương 650mg thảo mộc), Đinh lăng lại nghiêng về vai trò giảm mệt mỏi và phục hồi thể lực cho người vận động — cho thấy tính đa năng của vị thuốc này.",
  },
  "bacopa": {
    key: "bacopa", name: "Bacopa (Rau đắng biển)", scientificName: "Bacopa monnieri",
    image: "/images/herbs/bacopa.jpg",
    benefit: "Thảo dược vàng cho não bộ. Chứa Bacosides giúp tăng cường trí nhớ, khả năng học hỏi và tập trung, bảo vệ tế bào thần kinh, giảm lo âu căng thẳng.",
    detail: "Bacosides — hoạt chất chính của Bacopa monnieri — đã được nhiều nghiên cứu lâm sàng đánh giá về khả năng cải thiện trí nhớ, tốc độ xử lý thông tin và khả năng học hỏi. Cơ chế gồm: bảo vệ và kích thích phát triển các đầu mút thần kinh (synapse), tăng dẫn truyền thần kinh và chống stress oxy hóa ở mô não.\n\nTrong Mindenergy Max, Bacopa là thành phần 'chủ lực hiện đại' cho não bộ. Khi kết hợp với enzyme tiêu sợi huyết (cải thiện tuần hoàn máu), DHA (dưỡng chất cấu tạo màng tế bào thần kinh) và các thảo dược dẫn máu lên não, sản phẩm hỗ trợ đồng thời hai khía cạnh: 'phần cứng' (mạch máu, dưỡng chất nuôi não) và 'phần mềm' (chức năng ghi nhớ, tập trung) — toàn diện hơn so với chỉ dùng một hoạt chất đơn lẻ.",
  },
  "nguu-tat": {
    key: "nguu-tat", name: "Ngưu tất", scientificName: "Achyranthes bidentata",
    image: "/images/herbs/nguu-tat.jpg",
    benefit: "Giúp hoạt huyết, thông kinh mạch, bổ can thận, mạnh gân cốt. Hỗ trợ tuần hoàn máu lên não và giảm đau nhức xương khớp.",
    detail: "Ngưu tất chứa saponin và ecdysterone, có đặc tính hoạt huyết và mạnh gân cốt. Một đặc điểm thú vị theo Đông y là vị này có khả năng 'dẫn thuốc' (dẫn dược), nghĩa là điều hướng tác dụng của các vị khác đến đúng vị trí mong muốn.\n\nTrong Mindenergy Max, Ngưu tất đóng vai trò 'dẫn đường': tăng cường lưu thông và đưa dòng máu giàu dưỡng chất lên não, giúp các hoạt chất khác (Bacopa, DHA, Đinh lăng) tiếp cận mô não và phát huy tác dụng tốt hơn. Nói cách khác, dù bản thân không phải 'ngôi sao', Ngưu tất lại là mắt xích kết nối quan trọng quyết định hiệu quả của cả cơ chế cải thiện tuần hoàn não.",
  },
  // ===== XƯƠNG KHỚP (Jointlink Max) =====
  "bach-truat": {
    key: "bach-truat", name: "Bạch truật", scientificName: "Atractylodes macrocephala",
    image: "/images/herbs/bach-truat.jpg",
    benefit: "Vị thuốc bổ tỳ vị hàng đầu. Giúp kiện tỳ, tăng cường tiêu hóa, lợi tiểu, cầm mồ hôi và nâng cao thể trạng. Hỗ trợ giảm đau nhức xương khớp.",
    detail: "Bạch truật chứa tinh dầu (atractylon) và polysaccharide, là vị thuốc 'kiện tỳ' (bổ hệ tiêu hóa) số một trong Đông y, đồng thời có tác dụng trừ thấp và lợi tiểu. Nó đảm nhận hai vai trò khác nhau ở hai sản phẩm:\n\n• Trong Jointlink Max (hàm lượng cao 300mg): Bạch truật TRỪ THẤP — loại bỏ 'thấp khí' tích tụ ở khớp, vốn được Đông y xem là nguyên nhân gây sưng, nặng và đau khớp. Nó dọn nền để Khương hoạt, Nghệ và Dây đau xương giảm đau và kháng viêm hiệu quả hơn.\n\n• Trong Lacttocol Max: cùng Bạch phục linh, Bạch truật kiện tỳ và bảo vệ niêm mạc đường ruột, giảm rối loạn tiêu hóa. Một vị thuốc — hai vai trò tùy theo công thức và liều lượng, minh họa cho cách phối ngũ linh hoạt của Đông y.",
  },
  "khuong-hoat": {
    key: "khuong-hoat", name: "Khương hoạt", scientificName: "Notopterygium incisum",
    image: "/images/herbs/khuong-hoat.jpg",
    benefit: "Vị thuốc trừ phong thấp hàng đầu. Giúp giảm đau nhức xương khớp, đau mỏi vai gáy, khu phong tán hàn và hỗ trợ vận động linh hoạt.",
    detail: "Khương hoạt chứa tinh dầu và các coumarin (notopterol, isoimperatorin) có tác dụng giảm đau và kháng viêm. Trong Đông y, đây là vị 'trừ phong thấp' kinh điển, đặc trị các chứng đau do thời tiết, đau mỏi vai gáy và khớp.\n\nTrong Jointlink Max (185mg), Khương hoạt là vị giảm đau chủ lực: theo y lý cổ truyền, nó 'đuổi' phong - hàn - thấp ra khỏi cơ thể — bộ ba tà khí được cho là gây đau nhức xương khớp. Khi kết hợp với Dây đau xương (cùng khu phong trừ thấp, mạnh gân cốt), hai vị tạo thành 'bộ đôi giảm đau' mạnh; còn Nghệ (Curcumin) bổ sung khả năng kháng viêm hiện đại. Nhờ vậy công thức tác động vào cả nguyên nhân (phong thấp) lẫn hậu quả (viêm, đau).",
  },
  "day-dau-xuong": {
    key: "day-dau-xuong", name: "Dây đau xương", scientificName: "Tinospora sinensis",
    image: "/images/herbs/day-dau-xuong.jpg",
    benefit: "Như tên gọi, là khắc tinh của đau nhức xương khớp. Khu phong trừ thấp, mạnh gân cốt, hỗ trợ giảm đau lưng, đau khớp và phục hồi vận động.",
    detail: "Dây đau xương (Tinospora sinensis) chứa alkaloid và glycosid với hoạt tính kháng viêm, giảm đau và mạnh gân cốt — cái tên dân gian đã nói lên công dụng đặc trưng của nó cho hệ vận động.\n\nTrong Jointlink Max (105mg), Dây đau xương phối hợp với Khương hoạt và Bạch truật theo nguyên lý 'trừ nguyên nhân — phục hồi': vừa khu phong trừ thấp để cắt cơn đau, vừa bồi bổ và làm mạnh gân cốt để hỗ trợ phục hồi lâu dài. Khác với các thuốc chỉ giảm đau tức thời, sự góp mặt của vị này hướng tới mục tiêu giúp khớp vận động linh hoạt bền vững — phù hợp người đau khớp mạn tính, người lớn tuổi.",
  },
  "nghe": {
    key: "nghe", name: "Khương hoàng (Nghệ)", scientificName: "Curcuma longa",
    image: "/images/herbs/nghe.jpg",
    benefit: "Chứa Curcumin nổi tiếng. Chống viêm, chống oxy hóa mạnh, hỗ trợ tiêu hóa, bảo vệ gan, làm lành tổn thương và hỗ trợ xương khớp.",
    detail: "Curcumin trong Khương hoàng (Nghệ) là một trong những hoạt chất kháng viêm tự nhiên được nghiên cứu nhiều nhất, hoạt động bằng cách ức chế các con đường gây viêm (như NF-κB) và trung hòa gốc tự do.\n\nTrong Jointlink Max, Nghệ tập trung vào việc giảm phản ứng VIÊM tại khớp — yếu tố trực tiếp gây sưng, đau và thúc đẩy thoái hóa. Trong khi Khương hoạt và Dây đau xương 'trừ phong thấp' theo Đông y, thì Nghệ bổ sung cơ chế kháng viêm hiện đại; Cam thảo lại làm dịu và điều hòa. Sự phối hợp Đông - Tây này giúp sản phẩm vừa giảm triệu chứng đau, vừa làm chậm tiến trình thoái hóa khớp từ bên trong.",
  },
  "cam-thao": {
    key: "cam-thao", name: "Cam thảo", scientificName: "Glycyrrhiza uralensis",
    image: "/images/herbs/cam-thao.jpg",
    benefit: "Vị thuốc điều hòa trong các bài thuốc. Giải độc, kháng viêm, làm dịu, bổ tỳ vị và hài hòa các vị thuốc khác trong công thức.",
    detail: "Cam thảo bắc chứa Glycyrrhizin — hoạt chất tạo vị ngọt đặc trưng, có tác dụng kháng viêm, làm dịu niêm mạc và giải độc. Trong Đông y, Cam thảo được mệnh danh là 'quốc lão', có mặt trong phần lớn các bài thuốc cổ phương với vai trò ĐIỀU HÒA.\n\nTrong Jointlink Max, Cam thảo vừa kháng viêm nhẹ, vừa 'hòa giải' các vị thuốc mạnh và có tính cay nóng (Khương hoạt, Nghệ, Sinh khương): nó làm dịu, bảo vệ dạ dày và giúp các thành phần phối hợp êm dịu hơn khi dùng dài ngày. Đây là vai trò 'hậu cần' thầm lặng nhưng quan trọng — giúp một công thức nhiều vị mạnh trở nên dễ dung nạp với người dùng.",
  },
  // ===== GAN & ĐƯỜNG RUỘT (Detoxmune / Lacttocol) =====
  "tho-phuc-linh": {
    key: "tho-phuc-linh", name: "Thổ phục linh", scientificName: "Smilax glabra",
    image: "/images/herbs/tho-phuc-linh.jpg",
    benefit: "Vị thuốc giải độc gan hàng đầu. Thanh nhiệt, trừ thấp, giải độc cơ thể, hỗ trợ điều trị mẩn ngứa, mề đay và bảo vệ chức năng gan.",
    detail: "Thổ phục linh chứa flavonoid (astilbin) và saponin với khả năng giải độc, trừ thấp nhiệt và chống viêm. Đông y dùng vị này để 'thanh nhiệt giải độc', đặc biệt cho các chứng ngoài da do gan nóng.\n\nTrong Detoxmune Max (hàm lượng cao 375mg), Thổ phục linh là vị 'trị gốc' chủ lực: hỗ trợ gan đào thải độc tố và làm sạch cơ thể — rất phù hợp với người hay bị mẩn ngứa, mề đay, vàng da, nóng gan do uống nhiều rượu bia hoặc dùng thuốc hại gan. Nó cộng hưởng với DeltaImmune (nâng đề kháng) và Acid alpha-lipoic (chất chống oxy hóa tái tạo, bảo vệ tế bào gan) để bảo vệ lá gan toàn diện: vừa giải độc, vừa chống oxy hóa. Trong Lacttocol Max, Thổ phục linh kết hợp Bạch truật để trừ thấp và làm sạch đường ruột.",
  },
  // ===== TRẺ EM (Kidsmune Max) & ĐỀ KHÁNG =====
  "hoang-ky": {
    key: "hoang-ky", name: "Hoàng kỳ", scientificName: "Astragalus membranaceus",
    image: "/images/herbs/hoang-ky.jpg",
    benefit: "Vị thuốc bổ khí nổi tiếng. Tăng cường hệ miễn dịch, bồi bổ cơ thể suy nhược, bảo vệ tim mạch và gan, chống lão hóa và hỗ trợ làm lành vết thương.",
    detail: "Hoàng kỳ chứa Astragaloside (saponin) và polysaccharide được nghiên cứu cho thấy khả năng kích thích sản sinh và hoạt hóa tế bào miễn dịch, đồng thời bồi bổ khí huyết. Đây là vị 'bổ khí' hàng đầu của Đông y.\n\nVai trò theo từng sản phẩm: trong Kidsmune Max (155mg), Hoàng kỳ là vị bổ khí chủ lực giúp trẻ tăng đề kháng, ít ốm vặt, ăn ngon hơn; trong VHealth và Caphelink, nó bồi bổ khí huyết và chống mệt mỏi, biến đồ uống dinh dưỡng hằng ngày thành thức uống dưỡng sức. Đặc biệt, Hoàng kỳ là 'lá chắn' Đông y bổ trợ rất hợp với DeltaImmune (postbiotic): một bên kích hoạt miễn dịch theo cơ chế sinh học, một bên bồi bổ nguyên khí — cùng nâng cao sức đề kháng từ hai hướng.",
  },
  "diep-ca": {
    key: "diep-ca", name: "Diếp cá", scientificName: "Houttuynia cordata",
    image: "/images/herbs/diep-ca.jpg",
    benefit: "Thảo dược mát lành. Thanh nhiệt giải độc, kháng khuẩn, kháng viêm, tăng cường miễn dịch và hỗ trợ tiêu hóa. Đặc biệt tốt cho trẻ em.",
    detail: "Diếp cá chứa Quercetin (flavonoid) và tinh dầu (decanoyl acetaldehyde) có khả năng kháng khuẩn, kháng viêm tự nhiên, lại rất lành tính nên phù hợp với trẻ nhỏ. Dân gian quen dùng diếp cá để thanh nhiệt, hạ sốt và làm mát.\n\nTrong Kidsmune Max (130mg), Diếp cá thanh nhiệt và hỗ trợ hệ tiêu hóa, hô hấp của trẻ — đúng hai hệ cơ quan trẻ nhỏ hay gặp vấn đề (táo bón, nóng trong, ho, sổ mũi). Khi kết hợp với Sữa non (Colostrum - giàu kháng thể), Hoàng kỳ (bổ khí) và DeltaImmune, sản phẩm vừa 'làm mát' vừa 'tăng đề kháng', giúp trẻ ăn ngon, tiêu hóa tốt và ít ốm vặt — một cách tiếp cận cân bằng giữa thanh nhiệt và bồi bổ.",
  },
  "bach-tat-le": {
    key: "bach-tat-le", name: "Bạch tật lê", scientificName: "Tribulus terrestris",
    image: "/images/herbs/bach-tat-le.jpg",
    benefit: "Thảo dược tăng cường nội tiết tố nam. Hỗ trợ sản sinh testosterone tự nhiên, tăng cường sinh lực, cải thiện chức năng sinh lý và sức bền cơ bắp.",
    detail: "Bạch tật lê chứa Protodioscin (một saponin furostanol) được cho là kích thích cơ thể tự sản sinh testosterone nội sinh thông qua việc tăng hormone LH, thay vì đưa hormone từ ngoài vào.\n\nTrong Man-Link Max (90mg — hàm lượng thảo dược cao nhất công thức), Bạch tật lê là vị 'tăng lực nền tảng': nâng nồng độ hormone nam một cách tự nhiên, từ đó cải thiện ham muốn, khối cơ và sức bền. Cách tiếp cận 'kích thích cơ thể tự sản sinh' này được xem là an toàn và bền hơn so với bổ sung hormone trực tiếp. Nó nằm cùng nhóm 'trị ngọn — tăng lực' với Dâm dương hoắc và Cỏ cà ri, tạo hiệu ứng cộng hưởng cho phái mạnh.",
  },
  "co-ca-ri": {
    key: "co-ca-ri", name: "Cỏ cà ri (Fenugreek)", scientificName: "Trigonella foenum-graecum",
    image: "/images/herbs/co-ca-ri.jpg",
    benefit: "Hạt giàu dưỡng chất. Hỗ trợ tăng cường nội tiết tố, cải thiện sinh lực nam giới, hỗ trợ kiểm soát đường huyết và tốt cho tiêu hóa.",
    detail: "Hạt Cỏ cà ri (Fenugreek) chứa saponin furostanolic (như trong các chế phẩm Testofen) được nghiên cứu hỗ trợ duy trì nồng độ testosterone, ham muốn và sức bền; ngoài ra còn có chất xơ hòa tan tốt cho đường huyết và tiêu hóa.\n\nTrong Man-Link Max, Cỏ cà ri bổ trợ cho Bạch tật lê và Ba kích — cùng thuộc nhóm tăng cường nội tiết tố nam — tạo hiệu ứng cộng hưởng giúp cải thiện sinh lực và thể lực cho phái mạnh. Việc phối nhiều vị cùng đích (thay vì một vị liều cao) là cách công thức tăng hiệu quả mà vẫn giữ độ an toàn và dung nạp tốt.",
  },
  "ba-kich": {
    key: "ba-kich", name: "Ba kích", scientificName: "Morinda officinalis",
    image: "/images/herbs/ba-kich.jpg",
    benefit: "Rễ củ màu tím đặc trưng, vị thuốc bổ thận tráng dương nổi tiếng. Tăng cường sinh lực nam giới, mạnh gân cốt, giảm đau lưng mỏi gối và chống mệt mỏi.",
    detail: "Ba kích chứa anthraglycosid, iridoid và đường khử, theo nghiên cứu giúp hỗ trợ sản sinh testosterone nội sinh và chống mệt mỏi. Đông y xếp Ba kích vào nhóm bổ thận dương hàng đầu.\n\nTrong Man-Link Max, Ba kích đóng vai 'trị gốc': bổ thận dương, làm ấm và nuôi dưỡng tạng thận — vốn được Đông y coi là gốc rễ của sinh lực phái mạnh và sức khỏe gân cốt. Khi kết hợp với Dâm dương hoắc, Bạch tật lê (trị ngọn — tăng lực nhanh) và L-Arginine (giãn mạch), Ba kích giúp cải thiện sinh lý một cách BỀN VỮNG thay vì chỉ kích thích tức thời. Đây là vị thể hiện rõ nhất triết lý 'bổ gốc' của công thức nam giới.",
  },
  // ===== ĐỀ KHÁNG / DINH DƯỠNG (VHealth, Caphelink) =====
  "dang-sam": {
    key: "dang-sam", name: "Đảng sâm", scientificName: "Codonopsis pilosula",
    image: "/images/herbs/dang-sam.jpg",
    benefit: "Được ví như 'nhân sâm bình dân'. Bổ tỳ, ích khí, sinh tân dịch, tăng cường thể lực và sức đề kháng, bồi bổ cơ thể suy nhược, mệt mỏi.",
    detail: "Đảng sâm chứa polysaccharide và saponin, bổ khí và kiện tỳ tương tự Nhân sâm nhưng tính ôn hòa hơn — nên thích hợp dùng hằng ngày, kể cả cho người không hợp với nhân sâm 'nóng'.\n\nTrong VHealth (Socola/Trà xanh), Đảng sâm cùng Hoàng kỳ (bổ khí) và Nấm Chaga (chống oxy hóa) tạo nền tảng bồi bổ khí huyết, giúp người dùng ăn ngon, tăng thể lực. Chính bộ thảo dược này nâng VHealth từ một 'bữa ăn dinh dưỡng' (đạm, vitamin, khoáng) lên thành 'thực phẩm bổ dưỡng' đúng nghĩa — vừa cung cấp dưỡng chất, vừa bồi bổ và tăng đề kháng cho cả gia đình.",
  },
  "nam-chaga": {
    key: "nam-chaga", name: "Nấm Chaga", scientificName: "Inonotus obliquus",
    image: "/images/herbs/nam-chaga.jpg",
    benefit: "Nấm dược liệu vùng Siberia lạnh giá. Chứa hàm lượng chất chống oxy hóa cực cao, tăng cường miễn dịch, bảo vệ tế bào và hỗ trợ kiểm soát đường huyết.",
    detail: "Nấm Chaga mọc trên thân cây bạch dương vùng Siberia, có chỉ số chống oxy hóa (ORAC) thuộc hàng cao nhất trong tự nhiên, giàu Beta-glucan, melanin và enzyme SOD (superoxide dismutase). Đây là kho chống oxy hóa và hỗ trợ miễn dịch tự nhiên.\n\nTrong VHealth và Caphelink, Nấm Chaga bổ sung 'lớp giáp' chống gốc tự do và hỗ trợ miễn dịch, biến đồ uống dinh dưỡng hằng ngày thành sản phẩm vừa ngon vừa bảo vệ sức khỏe. Khi đi cùng DeltaImmune (kích hoạt miễn dịch) và Hoàng kỳ/Đảng sâm (bổ khí), Nấm Chaga góp phần hoàn thiện bộ ba 'chống oxy hóa — bổ khí — kích hoạt miễn dịch' — đúng tinh thần 'thực phẩm là thuốc' của Vinalink.",
  },
  "la-chay": {
    key: "la-chay", name: "Lá chay", scientificName: "Artocarpus tonkinensis",
    image: "/images/herbs/la-chay.jpg",
    benefit: "Cây thuốc quý của Việt Nam. Hỗ trợ điều hòa miễn dịch, kháng viêm, giảm đau xương khớp và được nghiên cứu hỗ trợ sức khỏe toàn diện.",
    detail: "Lá chay (Artocarpus tonkinensis) là cây thuốc bản địa của Việt Nam, được một số viện nghiên cứu trong nước quan tâm về khả năng điều hòa miễn dịch (immunomodulation) và kháng viêm, nhờ các hợp chất flavonoid đặc trưng.\n\nTrong Caphelink, Lá chay kết hợp cùng Hoàng kỳ (bổ khí) và Nấm Chaga (chống oxy hóa) — và đặc biệt là DeltaImmune — biến ly cà phê hằng ngày thành thức uống vừa tỉnh táo (nhờ cà phê), vừa hỗ trợ điều hòa đề kháng. Sự góp mặt của Lá chay cũng thể hiện tinh thần đưa dược liệu Việt vào sản phẩm tiêu dùng phổ thông của Vinalink.",
  },
  // ===== VTOPCAN - Cao cấp =====
  "sa": {
    key: "sa", name: "Sả", scientificName: "Cymbopogon citratus",
    image: "/images/herbs/sa.jpg",
    benefit: "Thảo mộc thơm quen thuộc. Hỗ trợ tiêu hóa, giải cảm, kháng khuẩn, giải độc cơ thể và thư giãn tinh thần. Giàu tinh dầu có lợi.",
    detail: "Sả chứa tinh dầu Citral và Geraniol — có hoạt tính kháng khuẩn, kháng nấm và chống oxy hóa, đồng thời hỗ trợ tiêu hóa và tạo cảm giác thư giãn nhờ hương thơm dễ chịu.\n\nTrong VTopcan, Sả thuộc nhóm thảo dược Việt (cùng Lá tre, Hoa đu đủ đực) giữ vai trò hỗ trợ: thanh lọc, giải độc cơ thể và tạo hương vị dễ uống cho một công thức nhiều hoạt chất mạnh. Nó cộng hưởng với Nấm Ngưu chương chi trong việc bảo vệ gan và hỗ trợ đường tiêu hóa, giúp cơ thể đào thải độc tố hiệu quả hơn trong quá trình hồi phục — đặc biệt với người đang cần chăm sóc sức khỏe đặc biệt.",
  },
  "du-du": {
    key: "du-du", name: "Hoa đu đủ đực", scientificName: "Carica papaya",
    image: "/images/herbs/du-du.jpg",
    benefit: "Chứa nhiều enzyme và hợp chất quý. Hỗ trợ chống oxy hóa, tăng cường miễn dịch, hỗ trợ tiêu hóa và được dân gian dùng hỗ trợ sức khỏe toàn diện.",
    detail: "Hoa đu đủ đực giàu hợp chất phenolic, flavonoid và enzyme (như papain), được dân gian Việt Nam tin dùng từ lâu để hỗ trợ sức khỏe cho người suy nhược và mệt mỏi.\n\nTrong VTopcan, thành phần này bổ sung nhóm chất chống oxy hóa thực vật (phytochemical) đa dạng, cộng hưởng cùng Fucoidan và Lunasin để tạo nên 'hàng rào bảo vệ tế bào nhiều tầng' — đặc trưng cho triết lý kết hợp Đông - Tây y của sản phẩm cao cấp này. Trong mỹ phẩm Orico Toner, chiết xuất Quả đu đủ lại được dùng cho khả năng tẩy tế bào chết nhẹ nhàng (nhờ enzyme), giúp da sáng mịn — minh họa tính đa dụng của cây đu đủ.",
  },
  "la-tre": {
    key: "la-tre", name: "Lá tre", scientificName: "Bambusa sp.",
    image: "/images/herbs/la-tre.jpg",
    benefit: "Giàu Silica và chất chống oxy hóa. Thanh nhiệt, lợi tiểu, giải độc, hỗ trợ hạ sốt và làm mát cơ thể.",
    detail: "Cao Lá tre giàu flavonoid và Silica hữu cơ (silic sinh học), có tác dụng thanh nhiệt, lợi tiểu và chống oxy hóa; Silica còn liên quan đến độ chắc khỏe của mô liên kết.\n\nTrong VTopcan (50mg), Lá tre giữ vai trò 'điều hòa' theo Đông y — làm mát và cân bằng cơ thể trong khi các thành phần bổ mạnh khác (Fucoidan, Nấm Ngưu chương chi, Lunasin) phát huy tác dụng. Nó hỗ trợ thận và đường tiết niệu đào thải nhiệt độc trong quá trình thanh lọc, giúp công thức 'bổ mà không gây nóng' — một nguyên tắc quan trọng khi dùng sản phẩm liều cao, dài ngày.",
  },
  "hoang-dang": {
    key: "hoang-dang", name: "Hoàng đằng", scientificName: "Fibraurea tinctoria",
    image: "/images/herbs/hoang-dang.jpg",
    benefit: "Rễ và thân có màu vàng đặc trưng, giàu Palmatin và Berberin. Thanh nhiệt, kháng khuẩn, chống viêm, hỗ trợ tiêu hóa và bảo vệ thành mạch tim.",
    detail: "Hoàng đằng giàu Palmatin và Berberin — các alkaloid có tác dụng kháng viêm, kháng khuẩn và hỗ trợ chuyển hóa lipid (mỡ máu).\n\nTrong Cardiopro Max, Hoàng đằng phối hợp chặt chẽ với Hoàng bá (cùng nhóm Berberin) để thanh nhiệt, chống viêm thành mạch và hỗ trợ kiểm soát mỡ máu — góp phần giảm nguy cơ xơ vữa động mạch. Nếu Đan sâm và Natto lo việc 'khơi thông - làm tan' dòng máu, thì cặp Hoàng bá - Hoàng đằng đảm nhận việc 'bảo vệ - chống viêm' thành mạch. Sự phân vai rõ ràng này giúp công thức tác động lên nhiều khâu của bệnh lý tim mạch cùng lúc.",
  },
  // ===== TOPAPRO - Bột protein thực vật cao cấp =====
  "proteosmart": {
    key: "proteosmart", name: "ProteoSMART (Bột hạt cô đặc)", scientificName: "Hạt bí ngô, hướng dương, hạt lanh",
    image: "/images/herbs/proteosmart.jpg",
    benefit: "Hỗn hợp protein thực vật cô đặc (≥57%) từ hạt bí ngô, hạt hướng dương và hạt lanh. Cung cấp đạm sạch, dễ tiêu, giàu khoáng chất và Omega.",
    detail: "ProteoSMART là 'điểm nhấn công nghệ' của TOPAPRO (200mg), được cô đặc từ 3 loại hạt giàu dinh dưỡng, mỗi loại một thế mạnh: Hạt bí ngô (giàu kẽm, magie — tốt cho miễn dịch và cơ); Hạt hướng dương (vitamin E, selen — chống oxy hóa); Hạt lanh (Omega-3 ALA và lignan).\n\nVới hàm lượng protein cô đặc trên 57% và đầy đủ axit amin thực vật, ProteoSMART cung cấp đạm chất lượng cao nhưng dễ hấp thu, không gây đầy bụng hay nặng nề như một số nguồn đạm động vật. Đây là lựa chọn lý tưởng cho trẻ biếng ăn, người ăn chay, người cao tuổi và người cần phục hồi thể trạng — nhóm thường khó nạp đủ đạm từ bữa ăn thông thường.",
  },
  "hat-ngu-coc": {
    key: "hat-ngu-coc", name: "Hỗn hợp 10 loại hạt & ngũ cốc", scientificName: "Gạo lứt, đậu, hạt sen, óc chó...",
    image: "/images/herbs/hat-ngu-coc.jpg",
    benefit: "Bột từ 10 loại hạt: gạo tẻ, đậu xanh, gạo lứt, đậu Hà Lan, đậu lăng, đậu trắng, hạt sen, hạnh nhân, hạt bí đỏ, hạt óc chó.",
    detail: "Hỗn hợp 10 loại hạt và ngũ cốc tạo nền tảng dinh dưỡng toàn diện cho TOPAPRO, với nguyên tắc 'mỗi loại một thế mạnh, bù đắp cho nhau': Gạo lứt (vitamin nhóm B, chất xơ); các loại đậu — đậu xanh, đậu Hà Lan, đậu lăng, đậu trắng (đạm thực vật giàu lysine, vốn thiếu trong ngũ cốc); Hạt sen (an thần, bổ tỳ); Hạnh nhân và Óc chó (Omega-3, vitamin E tốt cho não và tim).\n\nViệc phối hợp nhiều nguồn thực vật giúp 'bổ sung axit amin chéo' — đạm thực vật đơn lẻ thường thiếu một vài axit amin thiết yếu, nhưng khi kết hợp đa dạng sẽ tạo nên hồ sơ đạm gần hoàn chỉnh. Nhờ đó TOPAPRO trở thành một bữa ăn dinh dưỡng cân bằng (đạm + vitamin + khoáng + chất xơ) thay vì chỉ là bột đạm đơn thuần.",
  },
  "nam-men": {
    key: "nam-men", name: "Nấm men thủy phân (AminbioCer-VIDS)", scientificName: "Saccharomyces cerevisiae",
    image: "/images/herbs/nam-men.jpg",
    benefit: "Nấm men Saccharomyces cerevisiae thủy phân — nguồn axit amin, nucleotide, vitamin nhóm B và Beta-glucan tự nhiên hỗ trợ miễn dịch và tiêu hóa.",
    detail: "AminbioCer-VIDS (150mg) là nấm men Saccharomyces cerevisiae đã được thủy phân để cơ thể hấp thu tối đa. Đây là thành phần được khoa học nghiên cứu nhiều: (1) Vách tế bào nấm men giàu Beta-1,3/1,6-glucan — được chứng minh kích hoạt đại thực bào qua thụ thể Dectin-1, tăng cường miễn dịch bẩm sinh; (2) Mannan-oligosaccharide (MOS) hoạt động như prebiotic nuôi lợi khuẩn đường ruột; (3) Quá trình thủy phân giải phóng nucleotide và axit amin tự do giúp tái tạo tế bào ruột, kích thích trẻ ăn ngon.\n\nTrong TOPAPRO, nấm men thủy phân chính là cầu nối giữa 'dinh dưỡng' và 'miễn dịch': không chỉ bổ sung đạm và vi chất, nó còn hỗ trợ hệ tiêu hóa - miễn dịch (vốn tập trung phần lớn ở đường ruột), giúp trẻ và người dùng hấp thu tốt hơn các dưỡng chất còn lại trong sản phẩm.",
  },
  "bio-she": {
    key: "bio-she", name: "Bio-She (Phức hợp 5 thảo dược)", scientificName: "Lá ổi, hương nhu, me rừng, cà ri, vỏ chanh",
    image: "/images/herbs/bio-she.jpg",
    benefit: "Phức hợp chiết xuất từ Lá ổi, Lá hương nhu, Quả me rừng (Amla), Lá cà ri Ấn Độ và Vỏ chanh — giàu polyphenol chống oxy hóa và hỗ trợ tiêu hóa.",
    detail: "Bio-She (60mg) là phức hợp thảo dược được nghiên cứu về khả năng chống oxy hóa và hỗ trợ chuyển hóa: (1) Lá ổi (Psidium guajava) giàu polyphenol và quercetin, hỗ trợ tiêu hóa và ổn định đường huyết; (2) Lá hương nhu (Ocimum sanctum - 'Tulsi') là thảo dược adaptogen của Ấn Độ, giúp giảm stress và kháng viêm; (3) Quả me rừng/Amla (Emblica officinalis) — một trong những nguồn vitamin C tự nhiên cao nhất, chống oxy hóa mạnh; (4) Lá cà ri Ấn Độ và Vỏ chanh giàu tinh dầu, kích thích tiêu hóa.\n\nTrong TOPAPRO, Bio-She giúp sản phẩm không chỉ 'bổ dưỡng' (đạm, vitamin) mà còn 'bảo vệ và tăng hấp thu': lớp polyphenol chống oxy hóa bảo vệ tế bào, đồng thời nhóm tinh dầu kích thích tiêu hóa giúp cơ thể tận dụng tối đa nguồn đạm thực vật — đặc biệt hữu ích cho trẻ và người tiêu hóa kém.",
  },
  "chlorella": {
    key: "chlorella", name: "Tảo lục Chlorella", scientificName: "Chlorella pyrenoidosa",
    image: "/images/herbs/chlorella.jpg",
    benefit: "Vi tảo lục giàu diệp lục, protein, vitamin và 'Chlorella Growth Factor'. Hỗ trợ thải độc, tăng đề kháng và bổ sung vi chất.",
    detail: "Chlorella pyrenoidosa là vi tảo lục có hàm lượng diệp lục cao nhất trong tự nhiên, đồng thời là 'siêu thực phẩm' chứa protein hoàn chỉnh, vitamin (B12, A, C), sắt và đặc biệt là CGF (Chlorella Growth Factor) — yếu tố được nghiên cứu hỗ trợ tái tạo tế bào và tăng trưởng ở trẻ.\n\nTrong TOPAPRO, Chlorella bổ sung hai giá trị: dinh dưỡng (đạm, vi chất bổ trợ cho nguồn đạm thực vật chính) và thải độc — diệp lục có khả năng gắn kết và hỗ trợ đào thải kim loại nặng, làm sạch cơ thể. Nhờ vậy nó vừa giúp bổ sung dưỡng chất, vừa tạo môi trường trong sạch để cơ thể (nhất là trẻ đang lớn) hấp thu và phát triển tốt hơn.",
  },
  // ===== THÀNH PHẦN QUÝ (VTopcan & sản phẩm cao cấp) =====
  "fucoidan": {
    key: "fucoidan", name: "Fucoidan", scientificName: "Chiết xuất tảo nâu (Fucus / Mozuku)",
    image: "/images/herbs/fucoidan.jpg",
    benefit: "Hoạt chất quý từ tảo nâu biển sâu, là 'ngôi sao' trong hỗ trợ miễn dịch và chống oxy hóa. Được nghiên cứu nhiều tại Nhật Bản về khả năng hỗ trợ sức khỏe tế bào.",
    detail: "Fucoidan là một polysaccharide sulfate hóa chiết xuất từ tảo nâu (Mozuku, Kombu). Đây là thành phần có HÀM LƯỢNG CAO NHẤT trong VTopcan (205mg) — lý do sản phẩm thuộc phân khúc cao cấp nhất. Các cơ chế được nghiên cứu nhiều tại Nhật Bản gồm: (1) Kích hoạt tế bào miễn dịch NK (Natural Killer) và đại thực bào; (2) Hỗ trợ quá trình apoptosis — 'tự chết' theo lập trình của tế bào bất thường; (3) Hỗ trợ ức chế hình thành mạch máu nuôi khối u (chống tạo mạch); (4) Chống oxy hóa mạnh.\n\nTrong công thức, Fucoidan là 'mũi nhọn' giúp VTopcan trở thành sản phẩm hỗ trợ nâng cao sức khỏe cho người cần chăm sóc đặc biệt. Nó hiệp đồng với Lunasin (bảo vệ DNA) và DeltaImmune (kích hoạt miễn dịch nền) để bảo vệ cơ thể từ nhiều lớp khác nhau.",
  },
  "lunasin": {
    key: "lunasin", name: "Lunasin (Protein đậu nành)", scientificName: "Glycine max",
    image: "/images/herbs/lunasin.jpg",
    benefit: "Peptide sinh học quý hiếm chiết từ đậu nành, được mệnh danh 'peptide phòng ngừa'. Hỗ trợ bảo vệ tế bào ở cấp độ gen.",
    detail: "Lunasin là một peptide 43 axit amin độc đáo trong đậu nành, được khoa học quan tâm đặc biệt vì khả năng tác động ở cấp độ biểu sinh (epigenetic) — tức ảnh hưởng đến cách các gen được 'bật/tắt' mà không thay đổi DNA gốc.\n\nTrong VTopcan (100mg), Lunasin bổ trợ cho Fucoidan ở một tầng sâu hơn: nó đi vào nhân tế bào, giúp bảo vệ DNA khỏi tổn thương và tham gia điều hòa các gen liên quan đến viêm và phân chia tế bào. Đây là lý do VTopcan không chỉ 'tăng đề kháng' mà còn hướng đến bảo vệ cơ thể từ gốc rễ tế bào — phù hợp với người cao tuổi, người cần phục hồi hoặc chăm sóc sức khỏe chuyên sâu. Sự kết hợp Fucoidan (miễn dịch) + Lunasin (bảo vệ gen) + DeltaImmune (đề kháng nền) tạo nên chiều sâu hiếm có cho một sản phẩm bảo vệ sức khỏe.",
  },
  "nam-nguu-chuong-chi": {
    key: "nam-nguu-chuong-chi", name: "Nấm Ngưu chương chi", scientificName: "Antrodia cinnamomea",
    image: "/images/herbs/nam-nguu-chuong-chi.jpg",
    benefit: "'Hồng ngọc trong rừng' của Đài Loan — loại nấm dược liệu cực hiếm, chỉ mọc trên cây long não. Bảo vệ gan và chống oxy hóa thuộc hàng đầu.",
    detail: "Nấm Ngưu chương chi (Antrodia cinnamomea) là dược liệu quý hiếm bậc nhất, chỉ mọc trong lõi cây long não ở Đài Loan, giàu Triterpenoid và Polysaccharide đặc hữu. Dù hàm lượng nhỏ (5mg) nhưng đây là 'tinh chất vàng' của VTopcan với ba vai trò: (1) Bảo vệ và giải độc gan mạnh — cơ quan trọng yếu khi cơ thể đang chống chọi bệnh tật hoặc dùng nhiều thuốc; (2) Chống oxy hóa, kháng viêm; (3) Hỗ trợ ức chế tế bào bất thường.\n\nTrong công thức, Nấm Ngưu chương chi đặc biệt cộng hưởng với nhóm thảo dược Việt (Sả, Lá tre) trong việc bảo vệ gan và thanh lọc, đảm bảo 'nhà máy giải độc' của cơ thể hoạt động tốt trong khi Fucoidan và Lunasin lo nhiệm vụ bảo vệ tế bào. Sự góp mặt của loại nấm đắt đỏ này khẳng định đẳng cấp của VTopcan.",
  },
  "tao-bien": {
    key: "tao-bien", name: "Tảo Nannochloropsis", scientificName: "Nannochloropsis sp.",
    image: "/images/herbs/tao-bien.jpg",
    benefit: "Vi tảo biển giàu dinh dưỡng, chứa hàm lượng cao Omega-3 (EPA), protein và sắc tố chống oxy hóa tự nhiên.",
    detail: "Nannochloropsis là vi tảo biển siêu nhỏ nhưng giàu dưỡng chất bậc nhất: EPA (Omega-3 quý cho tim mạch và kháng viêm), Astaxanthin và Zeaxanthin (sắc tố chống oxy hóa mạnh), cùng nhiều vitamin và khoáng vi lượng.\n\nTrong VTopcan (25mg), tảo biển đảm nhận phần 'nuôi dưỡng nền': bổ sung dưỡng chất và chất chống oxy hóa để các tế bào khỏe mạnh, trong khi Fucoidan và Lunasin làm nhiệm vụ bảo vệ chuyên sâu. Đây cũng là thành phần gắn với công nghệ 'Cơ lượng tử' của Vinalink — cấu trúc phân tử nhỏ giúp cơ thể hấp thu dưỡng chất dễ dàng hơn. Nannochloropsis còn xuất hiện trong VHealth, Green Quantum và VSportGel với vai trò bổ sung vi chất tương tự.",
  },
};

// ============================================================
// GÁN THẢO DƯỢC / HOẠT CHẤT CHO TỪNG SẢN PHẨM (theo slug)
// DeltaImmune đặt đầu danh sách ở các sản phẩm có chứa nó.
// ============================================================
export const PRODUCT_HERBS: Record<string, string[]> = {
  "caphelink": ["deltaimmune", "la-chay", "hoang-ky", "nam-chaga"],
  "vhealth-socola": ["deltaimmune", "hoang-ky", "dang-sam", "nam-chaga"],
  "vhealth-tra-xanh": ["deltaimmune", "hoang-ky", "dang-sam", "nam-chaga"],
  "genecel-max": ["deltaimmune", "linh-chi", "bach-thuoc", "kho-sam", "thong-do"],
  "detoxmune-max": ["deltaimmune", "tho-phuc-linh"],
  "cardiopro-max": ["deltaimmune", "dan-sam", "hoang-ba", "hoang-dang", "natto"],
  "jointlink-max": ["deltaimmune", "bach-truat", "khuong-hoat", "day-dau-xuong", "nghe", "cam-thao"],
  "lacttocol-max": ["deltaimmune", "bach-truat", "tho-phuc-linh"],
  "mindenergy-max": ["deltaimmune", "dinh-lang", "bacopa", "nguu-tat"],
  "manlink-max": ["deltaimmune", "nhan-sam", "dam-duong-hoac", "ba-kich", "dong-trung-ha-thao", "bach-tat-le", "co-ca-ri"],
  "kidsmune-max": ["deltaimmune", "hoang-ky", "diep-ca"],
  "vtopcan": ["deltaimmune", "fucoidan", "lunasin", "nam-nguu-chuong-chi", "tao-bien", "la-tre", "sa", "du-du"],
  "green-quantum": ["deltaimmune", "tao-bien"],
  "topapro": ["proteosmart", "hat-ngu-coc", "nam-men", "bio-she", "chlorella"],
  "vsportgel": ["dinh-lang", "tao-bien"],
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

// ============================================================
// TỔNG QUAN: Các thành phần trong sản phẩm KẾT HỢP với nhau
// xử lý vấn đề gì trong cơ thể (cơ chế phối hợp).
// Hiển thị ở đầu mục "Thảo dược & hoạt chất nổi bật".
// ============================================================
export const PRODUCT_HERB_SYNERGY: Record<string, string> = {
  "cardiopro-max":
    "Bộ thành phần phối hợp theo cơ chế 'khơi thông – làm tan – bảo vệ' cho hệ tim mạch: Đan sâm hoạt huyết, làm giãn mạch vành và tăng tưới máu cơ tim; Cao Natto (Nattokinase) làm tan và ngăn cục máu đông gây tắc mạch; Hoàng bá và Hoàng đằng (giàu Berberin/Palmatin) thanh nhiệt, kháng viêm thành mạch và hỗ trợ kiểm soát mỡ máu. Nền tảng là DeltaImmune nâng đề kháng tổng thể. Khi kết hợp, chúng vừa giúp dòng máu lưu thông tốt hơn, vừa giảm viêm và nguy cơ xơ vữa — hỗ trợ trái tim hoạt động nhẹ nhàng, bền bỉ hơn.",
  "jointlink-max":
    "Các vị thuốc xử lý đau khớp theo nguyên lý 'trừ nguyên nhân – giảm viêm – phục hồi': Khương hoạt và Dây đau xương khu phong trừ thấp, đánh vào gốc gây đau nhức theo Đông y; Khương hoàng (Curcumin) giảm phản ứng viêm tại khớp; Bạch truật trừ thấp, kiện tỳ nâng thể trạng; Cam thảo điều hòa, làm dịu dạ dày và hài hòa các vị mạnh; DeltaImmune nâng đề kháng nền. Cùng nhau, chúng giúp giảm sưng đau, làm chậm thoái hóa và hỗ trợ vận động linh hoạt hơn.",
  "mindenergy-max":
    "Các thành phần phối hợp để 'nuôi não – tăng trí nhớ – dẫn máu lên não': Bacopa bảo vệ và kích thích đầu mút thần kinh, cải thiện trí nhớ; Đinh lăng tăng tuần hoàn máu não và giảm mệt mỏi thần kinh; Ngưu tất 'dẫn đường', đưa máu giàu dưỡng chất lên não; enzyme tiêu sợi huyết cải thiện lưu thông; DHA nuôi dưỡng màng tế bào thần kinh; DeltaImmune nâng đề kháng nền. Bộ phối hợp này hỗ trợ đồng thời tuần hoàn não và khả năng ghi nhớ, tập trung.",
  "manlink-max":
    "Sáu thảo dược chia hai nhóm bổ trợ nhau theo triết lý 'trị cả gốc lẫn ngọn': nhóm BỔ THẬN – TRỊ GỐC (Ba kích, Đông trùng hạ thảo, Nhân sâm) nuôi dưỡng tạng thận và nguyên khí — nền tảng của sinh lực bền lâu; nhóm TĂNG LỰC – TRỊ NGỌN (Dâm dương hoắc, Bạch tật lê, Cỏ cà ri) kích thích testosterone nội sinh và tăng tuần hoàn tới cơ quan sinh dục. Khi kết hợp (cùng L-Arginine giãn mạch và DeltaImmune nâng đề kháng), chúng vừa cải thiện sinh lý, vừa bồi bổ tận gốc giúp phái mạnh dẻo dai, bền sức.",
  "genecel-max":
    "Bốn thảo dược tạo cơ chế 'làm sạch – bảo vệ – tái tạo' ở cấp tế bào: Khổ sâm thanh nhiệt, hỗ trợ thải độc để 'dọn sạch' môi trường tế bào; Linh chi và Thông đỏ (giàu chất chống oxy hóa OPC, Triterpene) tạo 'lá chắn' chống gốc tự do bảo vệ tế bào và collagen; Bạch thược bổ huyết, dưỡng âm nuôi dưỡng làn da. Phối cùng DeltaImmune (hàm lượng cao 400mg), bộ thành phần hỗ trợ làm chậm lão hóa và trẻ hóa cơ thể từ gốc.",
  "caphelink":
    "Ba thảo dược biến ly cà phê thành thức uống vừa tỉnh táo vừa dưỡng sức: Hoàng kỳ bổ khí, chống mệt mỏi; Nấm Chaga bổ sung chất chống oxy hóa và hỗ trợ miễn dịch; Lá chay — cây thuốc Việt — hỗ trợ điều hòa đề kháng. Kết hợp với DeltaImmune (postbiotic kích hoạt miễn dịch nền), chúng giúp người dùng tỉnh táo mà vẫn được bồi bổ và bảo vệ sức khỏe mỗi ngày.",
  "vhealth-socola":
    "Bộ ba thảo dược nâng bữa ăn dinh dưỡng thành thực phẩm bổ dưỡng đúng nghĩa: Đảng sâm và Hoàng kỳ bổ khí, kiện tỳ giúp ăn ngon, tăng thể lực; Nấm Chaga bổ sung 'lớp giáp' chống oxy hóa và hỗ trợ miễn dịch. Cùng DeltaImmune, Nấm ngưu chương chi và các vitamin/khoáng, chúng bồi bổ khí huyết và tăng đề kháng nền tảng cho cả gia đình.",
  "vhealth-tra-xanh":
    "Bộ ba thảo dược nâng bữa ăn dinh dưỡng thành thực phẩm bổ dưỡng đúng nghĩa: Đảng sâm và Hoàng kỳ bổ khí, kiện tỳ giúp ăn ngon, tăng thể lực; Nấm Chaga cùng tinh chất trà xanh Matcha bổ sung chất chống oxy hóa và hỗ trợ miễn dịch. Cùng DeltaImmune và các vitamin/khoáng, chúng bồi bổ khí huyết và tăng đề kháng nền tảng cho cả gia đình.",
  "lacttocol-max":
    "Hai vị thuốc kiện tỳ, bảo vệ đường ruột: Bạch truật kiện tỳ, tăng tiêu hóa và bảo vệ niêm mạc ruột; Thổ phục linh trừ thấp, giải độc làm sạch đường ruột. Kết hợp với DeltaImmune (nâng đề kháng tại đường ruột — nơi tập trung phần lớn miễn dịch), Calci alginat bảo vệ niêm mạc và chất xơ, chúng giúp cân bằng hệ vi sinh, cải thiện tiêu hóa và hấp thu dưỡng chất.",
  "detoxmune-max":
    "Thổ phục linh là vị thảo dược 'trị gốc' của sản phẩm: thanh nhiệt, trừ thấp, hỗ trợ gan đào thải độc tố — đặc biệt với người hay mẩn ngứa, nóng gan do rượu bia. Nó phối hợp với DeltaImmune (nâng đề kháng) và ALA (axit alpha-lipoic — chất chống oxy hóa tái tạo) để bảo vệ tế bào gan toàn diện: vừa giải độc, vừa chống oxy hóa và tăng đề kháng cho lá gan.",
  "kidsmune-max":
    "Hai thảo dược lành tính phối hợp cho trẻ: Hoàng kỳ bổ khí, tăng đề kháng giúp trẻ ít ốm vặt; Diếp cá thanh nhiệt, hỗ trợ hệ tiêu hóa và hô hấp — hai hệ trẻ hay gặp vấn đề. Cùng DeltaImmune (300mg, liều phù hợp cho trẻ), Sữa non (Colostrum giàu kháng thể), Lysine và DHA, sản phẩm vừa làm mát, vừa tăng miễn dịch giúp trẻ ăn ngon, ngủ tốt.",
  "vtopcan":
    "Bộ thành phần xây 'hàng rào bảo vệ tế bào nhiều tầng' theo triết lý Đông–Tây y: Fucoidan (tảo nâu) và Lunasin (peptide đậu nành) là mũi nhọn — kích hoạt miễn dịch và bảo vệ DNA tế bào; DeltaImmune nâng đề kháng nền; Nấm Ngưu chương chi bảo vệ, giải độc gan; Tảo biển bổ sung Omega-3 và dưỡng chất nuôi tế bào; nhóm thảo dược Việt (Lá tre, Sả, Hoa đu đủ đực) thanh nhiệt, giải độc và chống oxy hóa. Cùng nhau, chúng hỗ trợ nâng cao sức khỏe và bảo vệ cơ thể từ gốc rễ tế bào — phù hợp người cần chăm sóc đặc biệt.",
  "topapro":
    "Năm thành phần kết hợp tạo 'bữa ăn dinh dưỡng – miễn dịch' hoàn chỉnh: ProteoSMART (hạt bí, hướng dương, lanh) cùng 10 loại hạt/ngũ cốc cung cấp đạm thực vật, axit amin, vitamin và khoáng; Nấm men thủy phân bổ sung Beta-glucan và nucleotide tăng miễn dịch, kích thích ăn ngon; Tảo lục Chlorella thải độc và bổ vi chất; phức hợp Bio-She (lá ổi, hương nhu, Amla...) chống oxy hóa và hỗ trợ tiêu hóa. Cùng nhau, chúng bổ sung đạm sạch dễ hấp thu và tăng đề kháng — lý tưởng cho trẻ biếng ăn, người ăn chay và người cần phục hồi.",
  "vsportgel":
    "Đinh lăng — 'nhân sâm của người nghèo' — giúp giảm mệt mỏi và phục hồi thể lực, phối cùng Collagen peptide, Glucosamine và BCAA trong sản phẩm để hỗ trợ vận động, bảo vệ và phục hồi cơ – khớp cho người chơi thể thao và lao động nặng. Tảo Nannochloropsis bổ sung Omega-3 và vi chất chống oxy hóa.",
};

export function getHerbSynergy(slug: string): string | undefined {
  return PRODUCT_HERB_SYNERGY[slug];
}
