// ============================================================
// LỘ TRÌNH ĐÀO TẠO TƯ VẤN VIÊN VINALINK — NỘI DUNG ĐẦY ĐỦ
// Khóa: "Cách đặt lịch hẹn không sợ bị từ chối"
// Dựa trên: How to Get Appointments Without Rejection
// Nguồn: Tài liệu training của Nguyễn Đức Hoà (Google Drive) — giữ nguyên nội dung
// ============================================================

export interface TrainingSection {
  heading: string;
  content: string; // Hỗ trợ xuống dòng (\n) — hiển thị giữ nguyên định dạng
}

export interface TrainingModule {
  id: number;
  title: string;
  objective: string;
  sections: TrainingSection[];
  takeaway: string;
  reviewQuestions: string[];
}

export const TRAINING_INTRO = {
  title: "Cách đặt lịch hẹn không sợ bị từ chối",
  subtitle: "Khóa đào tạo nền tảng cho Tư vấn viên Vinalink",
  goal: "Giúp bạn tự tin đặt lịch hẹn với bất kỳ ai — không sợ từ chối, không gây khó chịu cho khách hàng.",
  moduleCount: 6,
  sourcePages: 110,
};

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: 1,
    title: "Tại sao việc đặt lịch hẹn lại khó?",
    objective:
      "Hiểu rõ nguyên nhân gốc rễ khiến chúng ta ngại đặt lịch hẹn — để từ đó giải quyết đúng vấn đề.",
    sections: [
      {
        heading: "1.1. Tình huống thực tế",
        content:
          "Hãy tưởng tượng bạn gọi điện cho người bạn thân là Minh:\n\n" +
          "• CHÚNG TA: \"Minh ơi! Tôi gọi để hỏi khi nào mình có thể gặp nhau một chút?\"\n" +
          "• MINH: \"Ừ... chuyện gì vậy?\"\n" +
          "• CHÚNG TA: \"Chỉ mất 20 phút thôi. Tôi muốn cho bạn xem một thứ rất thú vị!\"\n" +
          "• MINH: \"Thứ gì vậy? Bạn đang bán gì à?\"\n" +
          "• CHÚNG TA: \"Không phải bán hàng đâu. Bạn phải xem tận mắt mới hiểu được. Bạn có rảnh không?\"\n" +
          "• MINH: \"Ừ... tuần này bận lắm. Để tôi xem lịch rồi nhắn lại nhé.\"\n\n" +
          "Minh đã không nhận lịch hẹn. Tại sao? Vì Minh là người chuyên nghiệp — anh ấy đã dành cả cuộc đời để học cách TỪ CHỐI nhân viên bán hàng và các lời mời gặp mặt.",
      },
      {
        heading: "1.2. Sự bất công trong cuộc chơi",
        content:
          "Khi chúng ta gửi một người mới vào gặp bạn bè — đó là người NGHIỆP DƯ đang gặp những CHUYÊN GIA từ chối!\n\n" +
          "Nếu bạn tặng một người mới tham gia kinh doanh những thứ sau:\n" +
          "• Sự tự tin vô hạn\n" +
          "• Kỹ năng bán hàng chuyên nghiệp\n" +
          "• Hiểu biết đầy đủ về sản phẩm và kế hoạch kinh doanh\n" +
          "• Danh sách các câu hỏi phản đối và cách trả lời\n" +
          "• Một kịch bản hoàn hảo để xin lịch hẹn\n\n" +
          "...thì họ vẫn có thể thành công! Nhưng không ai có tất cả những điều đó ngay từ đầu. Vì vậy, chúng ta cần CÔNG CỤ phù hợp.",
      },
      {
        heading: "1.3. Hai nguyên nhân khiến chúng ta không hành động",
        content:
          "Đây là điều thú vị: Vấn đề KHÔNG phải là thiếu động lực. Chúng ta có mục tiêu, có ước mơ. Vậy điều gì đang cản trở chúng ta?\n\n" +
          "🔴 Nguyên nhân #1: TÂM LÝ (Sợ xấu hổ)\n" +
          "• Sợ bị từ chối\n" +
          "• Lo lắng sẽ bị coi thường\n" +
          "• Cảm thấy xấu hổ\n" +
          "• Sợ làm phiền bạn bè\n\n" +
          "🔴 Nguyên nhân #2: THIẾU KỸ NĂNG\n" +
          "• Không biết nói gì khi họ hỏi\n" +
          "• Không biết xử lý khi bị từ chối\n" +
          "• Không có kịch bản cụ thể\n" +
          "• Thiếu kỹ năng điều hướng cuộc trò chuyện\n\n" +
          "Tin tốt: Cả hai nguyên nhân này đều CÓ THỂ giải quyết được — và đó chính là nội dung của khóa học này!",
      },
      {
        heading: "1.4. Vì sao khách hàng lại kháng cự?",
        content:
          "Hãy nghe những gì người \"Chú ác\" (người chuyên từ chối) thường nói:\n" +
          "• \"Đừng nói với tôi về kế hoạch kim tự tháp của anh!\"\n" +
          "• \"Tôi không tin đâu — cứ bình thường như người khác đi.\"\n" +
          "• \"Tôi không quan tâm. Đừng làm phiền bạn bè tôi.\"\n" +
          "• \"Những thứ đó không bao giờ hiệu quả.\"\n" +
          "• \"Tôi không có thời gian... cho bất kỳ điều gì!\"\n\n" +
          "Khách hàng tiềm năng (cold prospects) còn khó hơn. Nhưng điều tốt là: chúng ta KHÔNG cần thuyết phục họ. Chúng ta chỉ cần đặt được một cuộc HẸN.",
      },
    ],
    takeaway:
      "Đặt lịch hẹn không phải là bán hàng. Mục tiêu duy nhất của cuộc gọi là ĐẶT ĐƯỢC LỊCH HẸN — không hơn, không kém.",
    reviewQuestions: [
      "Hai nguyên nhân chính khiến chúng ta ngại đặt lịch hẹn là gì?",
      "Tại sao người mới thường thất bại khi gặp bạn bè để xin lịch hẹn?",
      "Mục tiêu thực sự của một cuộc gọi xin lịch hẹn là gì?",
    ],
  },
  {
    id: 2,
    title: "Thay đổi câu chuyện nội tâm",
    objective:
      "Hiểu cách suy nghĩ của chúng ta ảnh hưởng đến hành động, và cách thay đổi \"câu chuyện nội tâm\" để tự tin hơn.",
    sections: [
      {
        heading: "2.1. Câu chuyện kem miễn phí",
        content:
          "Hãy nghĩ về tình huống này:\n\n" +
          "\"Tôi thích kem. Thực ra, tôi rất thích kem. Và nếu có kem miễn phí, được giao tận nhà suốt đời thì sao? Tuyệt vời chứ? Nhưng... điều kiện là mỗi lần ăn, bạn phải đâm kim dưới móng tay.\"\n\n" +
          "Bài học: Dù phần thưởng lớn đến đâu, nếu QUÁ TRÌNH tạo ra phần thưởng đó gây khó chịu, chúng ta sẽ dần dần từ bỏ.\n\n" +
          "Bí quyết không phải là tìm script hoàn hảo. Bí quyết là làm cho hoạt động gọi điện trở nên THỎA MÃN — đó là vấn đề TÂM LÝ, không phải kỹ thuật.",
      },
      {
        heading: "2.2. Câu chuyện nội tâm của chúng ta",
        content:
          "Mỗi khi chúng ta nghĩ đến việc gọi điện xin lịch hẹn, trong đầu có một câu chuyện đang diễn ra. Ví dụ:\n\n" +
          "🔴 CÂU CHUYỆN CŨ (Làm bạn tê liệt):\n" +
          "• \"Họ sẽ nghĩ tôi đang cố bán hàng\"\n" +
          "• \"Tôi sẽ làm phiền họ\"\n" +
          "• \"Bạn bè sẽ cười tôi\"\n" +
          "• \"Tôi không biết phải nói gì\"\n" +
          "• \"Điều này sẽ thất bại thôi\"\n\n" +
          "✅ CÂU CHUYỆN MỚI (Giải phóng bạn):\n" +
          "• \"Tôi đang chia sẻ một cơ hội thực sự\"\n" +
          "• \"Họ có thể cần đúng thứ này\"\n" +
          "• \"Mình đang giúp họ\"\n" +
          "• \"Tôi có kịch bản, tôi đã chuẩn bị\"\n" +
          "• \"Không sao dù kết quả thế nào\"",
      },
      {
        heading: "2.3. Xấu hổ đến từ đâu?",
        content:
          "Sự xấu hổ không đến từ bên ngoài — nó đến từ bên trong. Khi chúng ta gọi điện và bị từ chối, não bộ không ghi nhận: \"Người đó không quan tâm.\"\n\n" +
          "Não bộ ghi nhận: \"Mình đã xấu hổ. Mình đã làm phiền họ. Mình nên tránh điều này.\"\n\n" +
          "Nhưng hãy nhìn lại: Chúng ta có thực sự làm hại ai không? KHÔNG. Chúng ta chỉ đang cung cấp thông tin về một CƠ HỘI.\n\n" +
          "Mọi người không thể khiến chúng ta xấu hổ. Chỉ có chúng ta mới tự làm điều đó với chính mình.",
      },
      {
        heading: "2.4. Bằng chứng xã hội: Người khác đã từng xấu hổ và vượt qua",
        content:
          "Nghiên cứu về một chương trình bán hàng trực tiếp cho thấy:\n\n" +
          "\"Nhóm A (ít tự tin): Họ xấu hổ về sản phẩm, nên họ không bao giờ chia sẻ. Kết quả tồi tệ. Nhóm B (thay đổi cách nhìn): Họ nhận ra đây là cơ hội giúp đỡ mọi người. Doanh thu của họ tăng vọt.\"\n\n" +
          "Khi người ta nhận ra rằng sản phẩm/dịch vụ của họ thực sự giúp ích cho xã hội, họ THOẢI MÁI hơn khi chia sẻ. Khách hàng cảm nhận được điều đó.",
      },
      {
        heading: "2.5. Cách thực hành thay đổi câu chuyện nội tâm",
        content:
          "Mỗi buổi sáng trước khi bắt đầu gọi điện, hãy đọc to hoặc viết ra:\n\n" +
          "\"Tôi đang cung cấp cho mọi người cơ hội để cải thiện cuộc sống của họ. Tôi đang GIÚP ĐỠ, không phải làm phiền. Nếu họ quan tâm — tuyệt vời. Nếu không — không sao cả.\"",
      },
    ],
    takeaway:
      "Khi bạn tin rằng mình đang GIÚP ĐỠ chứ không phải làm phiền, khách hàng sẽ cảm nhận được điều đó — và bạn sẽ thoải mái, tự tin hơn rất nhiều.",
    reviewQuestions: [
      "Tại sao \"câu chuyện kem miễn phí\" lại liên quan đến việc gọi điện xin lịch hẹn?",
      "Sự xấu hổ thực sự đến từ đâu — bên ngoài hay bên trong?",
      "Hãy viết lại 3 \"câu chuyện cũ\" của bạn thành \"câu chuyện mới\" tích cực hơn.",
    ],
  },
  {
    id: 3,
    title: "Xây dựng kỹ năng đặt lịch hẹn",
    objective:
      "Học các kỹ thuật và kịch bản cụ thể để tự tin hơn trong mọi tình huống đặt lịch hẹn.",
    sections: [
      {
        heading: "3.1. Nguyên tắc vàng: Bán cuộc hẹn, không phải sản phẩm",
        content:
          "Hãy xem cách các nhà môi giới bất động sản chuyên nghiệp làm việc:\n\n" +
          "Khi đăng quảng cáo bán nhà, họ KHÔNG đưa ra tất cả thông tin. Họ chỉ chia sẻ 1-2 điểm hấp dẫn nhất để khiến người mua muốn GỌI ĐIỆN để biết thêm. Mục tiêu của quảng cáo không phải bán nhà — mà là tạo ra cuộc gọi điện thoại!\n\n" +
          "Tương tự: Mục tiêu của cuộc gọi của chúng ta không phải là bán sản phẩm hay thuyết phục họ tham gia. Mục tiêu duy nhất là: ĐẶT ĐƯỢC LỊCH HẸN.",
      },
      {
        heading: "3.2. Cấu trúc 5 phần của một kịch bản xin lịch hẹn",
        content:
          "BƯỚC 1 — Câu mở đầu thân thiện:\n   \"Chào Minh! Mình gọi vì nhớ đến cậu.\"\n\n" +
          "BƯỚC 2 — Lý do gọi (ngắn gọn):\n   \"Mình vừa tìm thấy điều gì đó có thể thú vị với cậu.\"\n\n" +
          "BƯỚC 3 — Câu hỏi về vấn đề của họ:\n   \"Cậu có muốn có thêm thời gian rảnh không? / Cậu có đang tìm cách tăng thu nhập không?\"\n\n" +
          "BƯỚC 4 — Xin lịch hẹn cụ thể:\n   \"Mình chỉ cần 20 phút. Cậu có rảnh thứ Ba hay thứ Tư không?\"\n\n" +
          "BƯỚC 5 — Đóng lịch hẹn:\n   \"Tuyệt! Vậy mình gặp cậu lúc 7h tối thứ Ba tại [địa điểm] nhé.\"",
      },
      {
        heading: "3.3. Kỹ thuật \"Tôi chỉ tò mò\"",
        content:
          "Đây là một trong những kỹ thuật mạnh nhất trong cuốn sách. Thay vì trực tiếp xin lịch hẹn, hãy sử dụng câu hỏi bắt đầu bằng \"Tôi chỉ tò mò...\":\n\n" +
          "\"Tôi chỉ tò mò — bạn có thấy khó khăn khi [vấn đề họ gặp phải] không?\"\n\n" +
          "Tại sao hiệu quả? Vì câu hỏi này:\n" +
          "• Không gây áp lực — không có cảm giác bán hàng\n" +
          "• Tạo sự kết nối — bạn đang quan tâm đến vấn đề của họ\n" +
          "• Mở ra cuộc trò chuyện tự nhiên\n" +
          "• Dễ dàng dẫn đến việc đề xuất lịch hẹn\n\n" +
          "Ví dụ các câu hỏi \"tôi chỉ tò mò\":\n" +
          "• \"Tôi chỉ tò mò — bạn có đang tìm cách kiếm thêm thu nhập ngoài giờ không?\"\n" +
          "• \"Tôi chỉ tò mò — bạn có thấy khó để cân bằng công việc và gia đình không?\"\n" +
          "• \"Tôi chỉ tò mò — bạn có bao giờ nghĩ đến việc tự kinh doanh không?\"\n" +
          "• \"Tôi chỉ tò mò — bạn có muốn giúp con bạn có hệ miễn dịch tốt hơn không?\"",
      },
      {
        heading: "3.4. Vài giây đầu tiên — Quan trọng nhất",
        content:
          "Trong vài giây đầu của cuộc gọi, khách hàng đang đặt câu hỏi:\n" +
          "• \"Đây là ai?\"\n" +
          "• \"Họ muốn gì từ tôi?\"\n" +
          "• \"Có đáng để tiếp tục nghe không?\"\n\n" +
          "Vì vậy, hãy sớm đưa ra: Vấn đề của HỌ và Lợi ích dành cho HỌ. Không nói về bạn, không nói về sản phẩm.\n\n" +
          "Ví dụ về vấn đề của khách → lợi ích ta mang lại:\n" +
          "• Khó tăng lương → Có thêm thu nhập\n" +
          "• Không có thời gian cho con cái → Làm việc từ xa\n" +
          "• Kẹt xe mỗi ngày → Tự do thời gian\n" +
          "• Không được thăng chức → Tự làm chủ\n" +
          "• Hóa đơn điện tăng cao → Tiết kiệm chi phí sinh hoạt\n" +
          "• Cảm thấy già đi nhanh chóng → Sức khỏe tốt hơn",
      },
    ],
    takeaway:
      "Một kịch bản tốt + kỹ thuật \"Tôi chỉ tò mò\" giúp bạn mở cuộc trò chuyện mà không gây phản kháng, và dẫn tự nhiên đến lịch hẹn.",
    reviewQuestions: [
      "5 thành phần của một kịch bản xin lịch hẹn là gì?",
      "Tại sao kỹ thuật \"Tôi chỉ tò mò\" lại hiệu quả?",
      "Hãy viết 3 câu hỏi \"Tôi chỉ tò mò\" phù hợp với sản phẩm/dịch vụ của bạn.",
    ],
  },
  {
    id: 4,
    title: "Các kênh đặt lịch hẹn",
    objective:
      "Biết cách xin lịch hẹn qua điện thoại, tin nhắn, và tận dụng giới thiệu từ người quen.",
    sections: [
      {
        heading: "4.1. Gọi điện thoại — Khi nào nên gọi?",
        content:
          "Theo nghiên cứu, thời điểm TỐT NHẤT để gọi điện là:\n" +
          "• Sáng sớm (trước 9h): Nhiều người có tâm trạng tốt, chưa bị áp lực công việc\n" +
          "• Chiều tối (sau 17h): Người ta đã xong việc, thoải mái hơn để nghe\n" +
          "• Tránh: Giờ ăn trưa, cuối tuần (trừ khi biết họ rảnh)\n\n" +
          "Quan trọng hơn: Gọi NGAY HÔM NAY hoặc NGÀY MAI. Đừng hẹn quá xa vào tương lai — khách hàng sẽ quên hoặc không muốn gặp nữa.\n\n" +
          "Quy tắc vàng: \"Lịch hẹn càng xa trong tương lai, xác suất thành công càng thấp.\"",
      },
      {
        heading: "4.1b. Khi gặp hộp thư thoại",
        content:
          "Đừng hoảng loạn! Hãy để lại tin nhắn ngắn gọn, tự tin:\n\n" +
          "\"Chào [Tên], đây là [Tên bạn]. Tôi gọi vì có điều muốn chia sẻ với bạn — tôi nghĩ bạn sẽ thấy thú vị. Bạn có thể gọi lại cho tôi khi rảnh không? Số của tôi là [số điện thoại]. Cảm ơn!\"",
      },
      {
        heading: "4.2. Nhắn tin / Messaging",
        content:
          "Tin nhắn có thể được sử dụng để đặt lịch hẹn không? CÓ — nhưng có những lưu ý quan trọng:\n\n" +
          "✅ NÊN làm:\n" +
          "• Gửi tin nhắn ngắn, thân thiện\n" +
          "• Hỏi thăm trước, không vào thẳng việc\n" +
          "• Dùng để THEO DÕI sau cuộc gọi\n" +
          "• Phù hợp với người bạn quen biết\n\n" +
          "❌ KHÔNG NÊN làm:\n" +
          "• Không gửi bài giới thiệu dài\n" +
          "• Không dùng tin nhắn thay cho cuộc gọi với người lạ\n" +
          "• Không gửi link website ngay lập tức\n" +
          "• Không \"sale\" ngay trong tin nhắn đầu tiên\n\n" +
          "Ví dụ tin nhắn hiệu quả:\n" +
          "\"Chào Lan! Lâu không gặp. Dạo này bạn thế nào rồi? Mình vừa tìm được điều gì đó hay hay, muốn chia sẻ với bạn. Khi nào bạn rảnh mình nói chuyện được không?\"",
      },
      {
        heading: "4.3. Sức mạnh của giới thiệu (Referrals)",
        content:
          "Ba loại cuộc gọi mà khách hàng LO NGẠI nhất (từ cao xuống thấp):\n" +
          "🔴 #1: Tham gia kinh doanh của bạn — Sợ nhất\n" +
          "🟡 #2: Mua sản phẩm của bạn — Sợ thứ hai\n" +
          "🟢 #3: Giới thiệu người khác cho bạn — Ít sợ nhất\n\n" +
          "Nhiều người sẽ vui lòng giới thiệu vì họ cảm thấy GIÚP ĐỠ được bạn bè — mà không mất gì cả. Hãy hỏi xin giới thiệu nhiều hơn!\n\n" +
          "Câu hỏi xin giới thiệu hiệu quả:\n" +
          "\"Bạn có biết ai đang tìm kiếm cơ hội tăng thu nhập không? Tôi có thể nói chuyện với họ — không ràng buộc gì cả.\"",
      },
      {
        heading: "4.4. Khách hàng tiềm năng được phân loại trước (Pre-qualified)",
        content:
          "Một cách để có khách hàng tiềm năng chất lượng hơn: Tặng sách/tài liệu hữu ích trước. Người nhận sách sẽ:\n" +
          "• Đã biết bạn là ai\n" +
          "• Đã nhận được giá trị từ bạn\n" +
          "• Ít kháng cự hơn khi bạn liên hệ\n\n" +
          "Nguyên tắc: Cho đi giá trị trước — nhận lại lòng tin sau.",
      },
    ],
    takeaway:
      "Mỗi kênh có cách dùng riêng. Hẹn gần, tin nhắn ngắn không \"sale\", và đặc biệt: xin giới thiệu là cách ít bị từ chối nhất.",
    reviewQuestions: [
      "Thời điểm tốt nhất để gọi điện là khi nào?",
      "Tin nhắn nên được sử dụng như thế nào để hiệu quả?",
      "Tại sao hỏi xin giới thiệu ít gây lo lắng cho khách hàng nhất?",
    ],
  },
  {
    id: 5,
    title: "Xử lý câu hỏi và phản đối",
    objective:
      "Tự tin trả lời các câu hỏi và phản đối phổ biến nhất — một cách bình tĩnh, chuyên nghiệp.",
    sections: [
      {
        heading: "5.1. Phản đối = Dấu hiệu quan tâm",
        content:
          "Đây là điều quan trọng cần nhớ:\n\n" +
          "Người KHÔNG quan tâm sẽ không hỏi thêm. Người CÓ câu hỏi và phản đối — họ đang CÂN NHẮC. Đây là dấu hiệu tốt!\n\n" +
          "Vì vậy, khi khách hàng đặt câu hỏi hoặc phản đối, đừng lo — hãy coi đó là cơ hội để giúp họ đưa ra quyết định.",
      },
      {
        heading: "5.2. Các câu hỏi và phản đối phổ biến nhất",
        content:
          "CÂU 1: \"Bạn có thể gửi link/video/thông tin qua mạng không?\"\n" +
          "→ \"Gửi 100 link thì sẽ không giải quyết được vấn đề gì. Điều tôi muốn là mình và bạn cùng ngồi lại để xem liệu chúng ta có thể hợp tác được không. Đó mới là điều quan trọng.\"\n\n" +
          "CÂU 2: \"Bạn có thể giải thích qua điện thoại không?\"\n" +
          "→ \"Chắc chắn rồi — đây là câu chuyện ngắn. Trước đó, hãy để chúng ta gặp mặt để tôi và bạn xem có phù hợp làm cùng nhau không. Bạn rảnh thứ Ba hay thứ Tư?\"\n\n" +
          "CÂU 3: \"Bạn có đang cố bán gì đó không?\"\n" +
          "→ \"Không, tôi không bán hàng. Tôi chỉ muốn chia sẻ một cơ hội và xem bạn có quan tâm không. Hoàn toàn không có áp lực.\"\n\n" +
          "CÂU 4: \"Tôi bận lắm, không có thời gian.\"\n" +
          "→ \"Tôi hiểu — nhưng dù bận đến đâu, chúng ta vẫn phải ăn trưa! Hãy gặp nhau trong bữa trưa đi. Tôi biết điều này có thể hữu ích cho bạn.\"\n\n" +
          "CÂU 5: \"Tôi không cảm thấy mình quan tâm.\"\n" +
          "→ \"Tôi hiểu. Hãy để tôi chia sẻ một số lựa chọn để bạn tham khảo trong tương lai — không cần quyết định ngay bây giờ.\"\n\n" +
          "CÂU 6: \"Cái này có cần tôi quyết định ngay không?\"\n" +
          "→ \"Không. Tôi chỉ muốn cho bạn xem — quyết định là của bạn, không phải của tôi.\"\n\n" +
          "CÂU 7: \"Bao lâu thì xong?\"\n" +
          "→ \"Khi chúng ta gặp nhau, bạn có thể nhìn mặt tôi và quyết định ngay xem có muốn tiếp tục hay không. Nếu không muốn — chúng ta xong ngay. Thường thì 20-30 phút thôi.\"\n\n" +
          "CÂU 8: \"Chi phí như thế nào?\"\n" +
          "→ \"Câu hỏi hay — nghe có vẻ bạn đang cảm thấy mình đang trả quá nhiều cho hóa đơn điện. Hãy gặp nhau để tôi chỉ cho bạn xem có thể tiết kiệm bao nhiêu.\"",
      },
      {
        heading: "5.3. Xử lý \"Đừng gọi lại cho tôi\"",
        content:
          "Nếu khách hàng nói \"Đừng gọi lại cho tôi nữa\" — đây là cách xử lý chuyên nghiệp:\n\n" +
          "\"Tôi hiểu và tôn trọng điều đó. Chỉ cho phép tôi nói một điều: Nếu bao giờ bạn thay đổi ý kiến và muốn biết thêm, hãy liên hệ tôi. Tôi sẽ luôn sẵn lòng. Chúc bạn ngày tốt lành!\"\n\n" +
          "Và DỪNG LẠI. Đừng cố gắng thêm. Hãy để ngỏ cánh cửa — vì cuộc sống thay đổi, và họ có thể sẽ quay lại.",
      },
      {
        heading: "5.4. Nhận ra \"Không\" tạm thời vs. \"Không\" thực sự",
        content:
          "Nhiều khi khách hàng nói \"Không\" hôm nay — nhưng không có nghĩa là \"Không\" mãi mãi. Cuộc sống thay đổi:\n" +
          "• Họ vừa mất việc → Bây giờ họ quan tâm đến thu nhập thêm\n" +
          "• Con họ vừa ốm → Bây giờ họ quan tâm đến sức khỏe\n" +
          "• Họ vừa được thăng chức → Bây giờ họ có tiền để đầu tư\n\n" +
          "Hãy giữ liên lạc định kỳ với mọi người. Không phải để bán hàng — mà để ở đúng chỗ khi họ SẴN SÀNG.",
      },
    ],
    takeaway:
      "Đừng tranh luận. Đồng cảm, trả lời ngắn gọn rồi luôn quay về mục tiêu: một cuộc hẹn. Giữ quan hệ với cả người từ chối.",
    reviewQuestions: [
      "Tại sao câu hỏi/phản đối là dấu hiệu TỐT?",
      "Hãy thực hành trả lời 3 phản đối phổ biến theo cách của riêng bạn.",
      "Làm thế nào để duy trì mối quan hệ với người từng nói \"Không\"?",
    ],
  },
  {
    id: 6,
    title: "Kế hoạch hành động và thực hành",
    objective: "Chuyển kiến thức thành hành động cụ thể, có thể đo lường được.",
    sections: [
      {
        heading: "6.1. Kỹ năng không thể học qua sách",
        content:
          "Đây là sự thật không mấy dễ chịu:\n\n" +
          "\"Bạn không thể học cách đi xe đạp chỉ bằng cách đọc sách về đi xe đạp. Và bạn không thể học cách đặt lịch hẹn chỉ bằng cách đọc về nó.\"\n\n" +
          "Kỹ năng chỉ đến từ THỰC HÀNH. Tốt nhất là thực hành với nhau trước — vai nhân vật, mô phỏng tình huống. Sau đó mới áp dụng thực tế.\n\n" +
          "Cách tốt nhất để học: Đọc → Thực hành giả định → Áp dụng thực tế → Học từ kinh nghiệm → Lặp lại.",
      },
      {
        heading: "6.2. Kế hoạch 30 ngày đầu tiên",
        content:
          "TUẦN 1:\n• Viết lại \"câu chuyện nội tâm\" mới\n• Liệt kê 20 người quen\n• Thực hành kịch bản với đồng đội\n• Thực hiện 5 cuộc gọi đầu tiên\n\n" +
          "TUẦN 2:\n• Thực hiện 10 cuộc gọi/tuần\n• Thực hành kỹ thuật \"Tôi chỉ tò mò\"\n• Ghi lại phản hồi và học hỏi\n• Hỏi xin ít nhất 3 lượt giới thiệu\n\n" +
          "TUẦN 3:\n• Tăng lên 15 cuộc gọi/tuần\n• Thực hành xử lý phản đối\n• Theo dõi tỷ lệ thành công\n• Thêm người vào danh sách liên hệ\n\n" +
          "TUẦN 4:\n• Đánh giá kết quả 30 ngày\n• Xác định điểm mạnh và điểm cần cải thiện\n• Lập kế hoạch tháng tiếp theo\n• Chia sẻ kinh nghiệm với đội nhóm",
      },
      {
        heading: "6.3. Theo dõi kết quả hàng ngày",
        content:
          "Sử dụng bảng theo dõi đơn giản này mỗi ngày, ghi lại 4 chỉ số:\n" +
          "• Số cuộc gọi\n" +
          "• Số lịch hẹn đặt được\n" +
          "• Số từ chối\n" +
          "• Ghi chú học hỏi\n\n" +
          "Việc đo lường mỗi ngày giúp bạn nhìn rõ tiến bộ và cải thiện liên tục.",
      },
      {
        heading: "6.4. Nguyên tắc không nên quên",
        content:
          "1. Mục tiêu là ĐẶT LỊCH HẸN — không phải thuyết phục hay bán hàng qua điện thoại.\n\n" +
          "2. Người từ chối không ghét bạn — họ chỉ chưa sẵn sàng. Hãy giữ mối quan hệ.\n\n" +
          "3. Mỗi cuộc gọi — dù thành công hay không — là bài học quý giá. Không có cuộc gọi nào là lãng phí.\n\n" +
          "4. Kỹ năng đến từ thực hành liên tục — không phải từ việc đọc thêm sách.",
      },
      {
        heading: "6.5. Câu hỏi kiểm tra bản thân trước khi gọi",
        content:
          "Trước mỗi buổi gọi điện, hãy hỏi bản thân:\n" +
          "• Tôi đang có câu chuyện nội tâm nào — tích cực hay tiêu cực?\n" +
          "• Tôi đã chuẩn bị kịch bản và câu hỏi mở chưa?\n" +
          "• Tôi biết VẤN ĐỀ của khách hàng mà mình sẽ gọi là gì chưa?\n" +
          "• Mục tiêu của cuộc gọi này là gì — LỊCH HẸN, không phải bán hàng?",
      },
      {
        heading: "Bài tập thực hành cuối khóa",
        content:
          "1. Viết kịch bản xin lịch hẹn của riêng bạn (5 thành phần).\n" +
          "2. Thực hành với đồng đội — một người đóng vai khách hàng khó tính.\n" +
          "3. Cam kết thực hiện ít nhất 5 cuộc gọi trong 24h tới.\n" +
          "4. Ghi lại kết quả và chia sẻ với nhóm sau 1 tuần.",
      },
    ],
    takeaway:
      "Kỹ năng đến từ hành động đều đặn, không phải sự hoàn hảo. Cam kết: 5 cuộc gọi trong 24h tới, ghi lại kết quả, chia sẻ với nhóm sau 1 tuần.",
    reviewQuestions: [
      "Tại sao không thể học kỹ năng đặt lịch hẹn chỉ qua sách vở?",
      "Liệt kê mục tiêu hành động của Tuần 1 trong kế hoạch 30 ngày.",
      "4 nguyên tắc không nên quên là gì?",
    ],
  },
];

// ============================================================
// KHÓA 2: NGHỆ THUẬT KỂ CHUYỆN & TẠO ĐỘNG LỰC
// Dựa trên các bài học kinh điển của Tom "Big Al" Schreiter
// Đã Việt hoá: KHÔNG dùng "đa cấp/MLM/kim tự tháp" trong lời dạy.
// Dùng: "kinh doanh cùng Vinalink", "chia sẻ sức khỏe", "mô hình giới thiệu".
// ============================================================

export const COURSE2_INTRO = {
  title: "Nghệ thuật kể chuyện & Tạo động lực",
  subtitle: "Khóa nâng cao cho Tư vấn viên Vinalink",
  goal: "Học cách dùng câu chuyện để thay đổi góc nhìn người nghe, tạo động lực bền vững và biến người do dự thành người sẵn sàng hành động — không tranh luận, không gây áp lực.",
  moduleCount: 6,
};

export const TRAINING_MODULES_2: TrainingModule[] = [
  {
    id: 1,
    title: "Sức mạnh của câu chuyện",
    objective:
      "Hiểu vì sao một câu chuyện ngắn mạnh hơn mọi lời tranh luận, và cách 'đổi khung' suy nghĩ người nghe.",
    sections: [
      {
        heading: "1.1. Câu chuyện càng ngắn — càng mạnh",
        content:
          "Nhiều người nói quá dài khi chia sẻ về sản phẩm hay cơ hội. Càng nói nhiều, người nghe càng phản đối, càng nghi ngờ, càng tìm lý do từ chối.\n\n" +
          "Người giỏi không tranh cãi, không giải thích dài dòng. Họ chỉ dùng MỘT câu chuyện ngắn để đổi góc nhìn người nghe. Khi hình ảnh trong đầu họ thay đổi — niềm tin của họ thay đổi theo.",
      },
      {
        heading: "1.2. Đừng thắng tranh luận — hãy đổi khung (Reframing)",
        content:
          "Khi ai đó hỏi một câu khó (ví dụ về mô hình kinh doanh), đừng lao vào tranh luận bằng lý lẽ. Bạn càng cãi, họ càng phòng thủ.\n\n" +
          "Thay vào đó, hãy ĐỔI KHUNG: kể một câu chuyện hoặc đưa một ví dụ đời thường khiến họ tự nhìn vấn đề theo cách mới, tích cực hơn. Đây là kỹ năng cốt lõi của thuyết phục, lãnh đạo và bán hàng.",
      },
      {
        heading: "1.3. Công thức ẩn sau mọi câu chuyện hay",
        content:
          "Ý tưởng phức tạp → Ví dụ đơn giản, quen thuộc → Cảm xúc rõ ràng.\n\n" +
          "Người giỏi thuyết phục không làm người khác 'thông minh hơn'. Họ làm cho tương lai và lựa chọn trở nên DỄ HÌNH DUNG hơn. Khi mọi thứ rõ ràng, não bộ tự giảm kháng cự.",
      },
    ],
    takeaway:
      "Đừng cố thắng tranh luận. Hãy đổi hình ảnh trong đầu người nghe bằng một câu chuyện ngắn — niềm tin sẽ thay đổi theo.",
    reviewQuestions: [
      "Vì sao nói nhiều khi tư vấn lại làm khách hàng phản đối nhiều hơn?",
      "'Reframing' (đổi khung) là gì? Cho một ví dụ.",
      "Công thức 3 bước của một câu chuyện thuyết phục là gì?",
    ],
  },
  {
    id: 2,
    title: "Bắt đầu từ bước nhỏ",
    objective:
      "Biến mục tiêu lớn đáng sợ thành những bước nhỏ dễ làm — để bản thân và người mới dám bắt đầu.",
    sections: [
      {
        heading: "2.1. Câu chuyện 'Một giờ mỗi ngày'",
        content:
          "Hãy hình dung công việc kinh doanh cùng Vinalink chỉ đơn giản là: dành 1 giờ mỗi ngày, từ thứ Hai đến thứ Sáu, để TRÒ CHUYỆN VỚI NGƯỜI THẬT — thay vì lướt mạng vô nghĩa.\n\n" +
          "Cách kể này biến 'xây dựng sự nghiệp' (nghe rất lớn lao) thành 'một thói quen nhỏ mỗi ngày'. Mục tiêu bớt đáng sợ, hành động dễ bắt đầu hơn.\n\n" +
          "Bài học: Người ta không sợ làm việc lớn. Họ sợ cảm giác QUÁ TẢI, MƠ HỒ, không biết bắt đầu từ đâu.",
      },
      {
        heading: "2.2. Học như học đàn piano",
        content:
          "Lúc đầu bạn không biết nói gì với người khác — và điều đó hoàn toàn bình thường. Giống như học piano: luyện từng chút một.\n\n" +
          "Tuần đầu: chỉ cần học nói 'Chào anh/chị'. Tuần sau: 'Em là...'. Rồi dần dần tốt lên.\n\n" +
          "Sự thật sâu sắc: SỰ TỰ TIN KHÔNG ĐẾN TRƯỚC HÀNH ĐỘNG. Nó đến SAU khi bạn hành động lặp lại đủ nhiều. Đừng chờ tự tin rồi mới làm — hãy làm để trở nên tự tin.",
      },
      {
        heading: "2.3. Câu chuyện 'Đeo chuông cho mèo'",
        content:
          "Một đàn chuột sống vui vẻ, rồi con mèo xuất hiện. Chúng họp bàn và một con đề xuất: 'Đeo chuông vào cổ mèo, nghe chuông là chạy!'. Ai cũng khen tuyệt vời. Nhưng rồi một con hỏi: 'Vậy... ai sẽ đi đeo chuông cho mèo?'\n\n" +
          "Ý nghĩa: Ai cũng BIẾT cần làm gì. Nhưng NỖI SỢ HÀNH ĐỘNG mới là vấn đề thật.\n\n" +
          "Vai trò của người dẫn dắt: 'Em biết anh/chị muốn bắt đầu. Để em giúp anh/chị đeo cái chuông đó lên cổ con mèo — anh/chị không phải làm một mình.' Người mới không cần tự biết mọi thứ; họ cần một người dẫn đường và cảm giác AN TOÀN.",
      },
      {
        heading: "2.4. Câu chuyện 'Mở quán nhỏ từng bước'",
        content:
          "Có người nói: 'Tôi không biết kinh doanh, không biết nói chuyện với ai.' Đừng tranh luận. Hãy hỏi: 'Giả sử anh/chị mở một quán ăn — nhưng chỉ mở 1 buổi tối thứ Sáu, 2 tiếng thôi, có thấy ổn không?'\n\n" +
          "Tuần đầu mời vài người bạn. Họ thích thì giới thiệu thêm. Tuần sau mỗi người mời thêm 1 khách: 4 người, 8 người, 16 người... từng chút một.\n\n" +
          "Người nghe bắt đầu nghĩ: 'À, nếu làm từng bước thì không quá khó.' Đây là kỹ thuật CHIA NHỎ (Chunking Down): biến điều đáng sợ thành điều quen thuộc.",
      },
    ],
    takeaway:
      "Khi ai đó nói 'Tôi không làm được', thường không phải họ bất tài — mà vì việc đó đang QUÁ LỚN trong đầu họ. Hãy chia nhỏ. Công thức: Bước nhỏ → Chiến thắng nhỏ → Danh tính mới ('Mình làm được').",
    reviewQuestions: [
      "Vì sao biến 'xây sự nghiệp' thành 'thói quen 1 giờ/ngày' lại hiệu quả?",
      "Sự tự tin đến trước hay sau hành động?",
      "Kỹ thuật 'chia nhỏ' giúp gì khi người ta nói 'việc này khó quá'?",
    ],
  },
  {
    id: 3,
    title: "Động lực quan trọng hơn kỹ năng",
    objective:
      "Hiểu vì sao người có lý do (WHY) mạnh luôn thắng người chỉ có kỹ năng — và cách tìm ra lý do đó.",
    sections: [
      {
        heading: "3.1. Có kỹ năng nhưng không có động lực",
        content:
          "Bạn mời được một người rất giỏi: quan hệ rộng, nói chuyện hay, từng kinh doanh. Nhưng... người đó không làm gì cả. Không gọi ai, không theo dõi, không hành động.\n\n" +
          "Sự thật: KỸ NĂNG không phải thứ quan trọng nhất. Rất nhiều người biết phải làm gì nhưng không làm. Biết ≠ Làm.",
      },
      {
        heading: "3.2. Câu chuyện 'Đống đất'",
        content:
          "Sau nhà bạn có một đống đất khổng lồ cần dọn. Bạn thuê thầy dạy: lái máy ủi, dùng xe xúc, kỹ thuật xúc đất. Bạn học rất giỏi.\n\n" +
          "Đến ngày làm thật: máy ủi hết xăng, xe xúc hỏng, trời mưa, bùn lầy, lạnh. Bạn nhìn đống đất rồi nói: 'Thôi bỏ đi', vào nhà bật tivi.\n\n" +
          "NHƯNG hãy đổi tình huống: con gái nhỏ của bạn đang chơi trên đống đất, đất sụp xuống, bé bị vùi dần. Máy hết xăng? KỆ. Không có dụng cụ? ĐÀO BẰNG TAY. Mưa, bùn? KHÔNG QUAN TÂM.\n\n" +
          "Vì sao? Vì bây giờ bạn có LÝ DO. Bạn có khao khát, sự cấp bách, động lực từ trái tim.",
      },
      {
        heading: "3.3. Người khao khát thắng người tài giỏi mà lười",
        content:
          "Con người không hành động vì lý trí. Họ hành động vì: nỗi đau, khao khát, trách nhiệm, lý do đủ lớn.\n\n" +
          "Đó là lý do nhiều người rất thông minh, đọc nhiều sách, học nhiều khóa... vẫn không thay đổi cuộc sống. Họ thiếu 'đòn bẩy cảm xúc'. Người bình thường nhưng KHAO KHÁT thường thắng người tài giỏi nhưng lười.\n\n" +
          "Người không có lý do mạnh sẽ luôn có lý do để bỏ cuộc: hết xăng, hỏng máy, trời mưa, không có thời gian... Người có lý do mạnh sẽ tự xoay xở, thích nghi, kiên trì.",
      },
    ],
    takeaway:
      "Một khao khát đủ lớn, một tầm nhìn rõ ràng và một lý do đủ mạnh có thể quan trọng hơn cả kiến thức. Trước khi dạy kỹ năng cho người mới, hãy giúp họ tìm ra LÝ DO của chính mình.",
    reviewQuestions: [
      "Vì sao người giỏi kỹ năng vẫn có thể không thành công?",
      "Câu chuyện 'đống đất' dạy điều gì về động lực?",
      "Hãy viết ra LÝ DO (WHY) khiến bạn muốn thành công cùng Vinalink.",
    ],
  },
  {
    id: 4,
    title: "Chọn đúng thời điểm",
    objective:
      "Hiểu rằng 'Không' thường chỉ là 'Chưa phải bây giờ' — và đừng nhận sự từ chối về phía mình.",
    sections: [
      {
        heading: "4.1. Hôm nay có thể chưa phải ngày của họ",
        content:
          "Nhiều người nghĩ khách từ chối vì sản phẩm tệ, vì mình kém. Nhưng thực tế, đôi khi chỉ là SAI THỜI ĐIỂM.\n\n" +
          "Con người không cố định — họ thay đổi theo cảm xúc, áp lực, hoàn cảnh sống.",
      },
      {
        heading: "4.2. Câu chuyện 'Một buổi sáng của vị phó giám đốc'",
        content:
          "Hãy tưởng tượng một vị phó giám đốc ngân hàng, bận rộn, căng thẳng.\n\n" +
          "• 7h00: Bạn gọi rủ đi nghe cơ hội. Anh ấy chưa tỉnh ngủ, đang cáu → 'Không quan tâm.' (khách XẤU — nhưng không phải vì cơ hội tệ, chỉ vì sai thời điểm)\n" +
          "• 7h30: Anh đọc báo: 'Ngân hàng sắp sa thải hàng loạt.' Bắt đầu lo lắng → giờ anh thành khách TỐT.\n" +
          "• 9h00: Trên đường đi làm, trời mưa, xe bị va quẹt, stress → 'Không hứng thú.'\n" +
          "• 9h30: Sếp gọi vào: 'Anh bị cho thôi việc.' → 10 phút trước anh từ chối bạn, giờ anh muốn gặp bạn NGAY.\n\n" +
          "Chỉ trong vài giờ, một người đi từ khách xấu → khách tốt → khách xấu → khách tốt.",
      },
      {
        heading: "4.3. 'Không' ≠ 'Không bao giờ'",
        content:
          "'Không' của khách thường chỉ nghĩa là 'Chưa phải bây giờ'. Có người 2 năm sau mới tham gia, sau khi mất việc, sau biến cố tài chính, khi nỗi lo đủ lớn.\n\n" +
          "Sai lầm của người mới: bị từ chối 1 lần là nghĩ 'người ta ghét', 'mình thất bại'. Người chuyên nghiệp nghĩ: 'Thời điểm chưa tới' và vẫn GIỮ LIÊN LẠC tử tế.\n\n" +
          "Quan trọng: ĐỪNG nhận sự từ chối về phía mình. Khách từ chối có thể vì stress, áp lực tiền bạc, chuyện gia đình, một ngày tồi tệ — không phải vì bạn.",
      },
    ],
    takeaway:
      "Con người thay đổi rất nhanh theo hoàn cảnh. 'Không' hôm nay không phải 'Không' mãi mãi. Đây chính là lý do việc GIỮ LIÊN LẠC & theo dõi tồn tại.",
    reviewQuestions: [
      "Vì sao cùng một người lại có thể là khách tốt rồi khách xấu chỉ trong vài giờ?",
      "'Không' của khách thường thật sự nghĩa là gì?",
      "Tại sao không nên nhận sự từ chối về phía bản thân?",
    ],
  },
  {
    id: 5,
    title: "Xử lý từ chối bằng câu chuyện",
    objective:
      "Trả lời khéo các câu hỏi nhạy cảm (kể cả 'đây có phải đa cấp không?') bằng câu chuyện — biến nghi ngờ thành thấu hiểu.",
    sections: [
      {
        heading: "5.1. 'Đây có phải đa cấp/kim tự tháp không?'",
        content:
          "Đây là câu hỏi nhạy cảm nhất. ĐỪNG tranh luận đúng-sai. Hãy đổi khung bằng câu chuyện người thầy giáo:\n\n" +
          "'Anh/chị thử nghĩ xem: nếu hồi đi học, thầy cô của anh/chị được nhận một phần nhỏ thu nhập của anh/chị suốt đời — thì liệu thầy cô có dạy anh/chị tận tâm hơn không?'\n" +
          "Người nghe thường đáp: 'Chắc chắn rồi.'\n\n" +
          "Bạn kết: 'Mô hình của Vinalink cũng vậy — người giới thiệu (người đỡ đầu) chỉ có thu nhập khi họ thật sự GIÚP anh/chị thành công. Quyền lợi của họ gắn liền với thành công của anh/chị. Đó là mô hình ai giúp người khác giỏi hơn thì người đó được tưởng thưởng.'",
      },
      {
        heading: "5.2. 'Tôi không có tiền tham gia'",
        content:
          "Đừng phản bác. Hãy kể chuyện hai gia đình:\n\n" +
          "• Gia đình A: đi ăn ngoài 2 lần/tuần, tốn khoảng vài trăm nghìn mỗi tháng → nhận lại: tăng cân, mệt mỏi.\n" +
          "• Gia đình B: dùng đúng số tiền đó đầu tư vào sức khỏe & việc kinh doanh cùng Vinalink → vài năm sau: khỏe mạnh hơn, có thêm thu nhập, thảnh thơi hơn.\n\n" +
          "Bạn không nói 'anh/chị nên đầu tư'. Bạn để họ tự hỏi: 'Mình đang tiêu tiền vào thứ làm mình yếu đi hay mạnh lên?' Vấn đề không phải CÓ tiền hay không — mà là ƯU TIÊN điều gì.",
      },
      {
        heading: "5.3. Câu chuyện 'Thẻ tích điểm siêu thị'",
        content:
          "Bạn vào siêu thị mua đồ, trả tiền rồi về. Người phía sau mua y hệt, nhưng họ quẹt thẻ thành viên nên được tích điểm, đổi quà, thậm chí đổi chuyến du lịch.\n\n" +
          "Rồi siêu thị nói với họ: 'Hãy giới thiệu hàng xóm tới mua. Khi họ mua, họ được tích điểm, còn anh/chị cũng được thưởng thêm.' Càng nhiều người mua, người đó càng có lợi.\n\n" +
          "Bạn kết: 'Vinalink cũng vậy thôi — giống chương trình khách hàng thân thiết, chỉ khác là thay vì điểm thưởng, mình nhận hoa hồng tiền mặt.' Câu chuyện biến điều 'xa lạ, đáng ngờ' thành điều 'quen thuộc đời thường'.",
      },
    ],
    takeaway:
      "Người giỏi thuyết phục không cố thắng tranh luận — họ đổi góc nhìn, đổi cảm xúc, đổi hình ảnh trong đầu người nghe. Khi hình ảnh thay đổi (từ 'đa cấp đáng ngờ' thành 'thầy cô tận tâm' hay 'thẻ tích điểm'), niềm tin thay đổi.",
    reviewQuestions: [
      "Trả lời câu 'đây có phải đa cấp không?' bằng câu chuyện người thầy giáo theo cách của bạn.",
      "Khi khách nói 'không có tiền', vấn đề thật sự là gì?",
      "Vì sao câu chuyện 'thẻ tích điểm' giúp khách bớt nghi ngờ?",
    ],
  },
  {
    id: 6,
    title: "Phải hành động",
    objective:
      "Hiểu rằng kiến thức và động lực đều vô nghĩa nếu không hành động — và cơ hội thường đến dưới dạng việc cần làm.",
    sections: [
      {
        heading: "6.1. Câu chuyện 'Ông Darrell và trận lũ'",
        content:
          "Lũ lớn dâng lên. Người ta bảo ông Darrell sơ tán, ông đáp: 'Không sao, tôi đã cầu nguyện, Trời sẽ cứu tôi.'\n\n" +
          "Nước dâng cao, một chiếc thuyền cứu hộ tới: 'Lên thuyền đi!' — 'Không cần, Trời sẽ cứu.' Nước dâng tới mái nhà, trực thăng tới thả dây: 'Nắm lấy!' — 'Không sao, Trời sẽ cứu!' Rồi nước ngập qua đầu, ông chết.\n\n" +
          "Lên thiên đàng, ông trách: 'Con đã cầu nguyện, sao Ngài không cứu?'. Trời đáp: 'Ta đã gửi xe cứu hộ, thuyền và trực thăng rồi còn gì?'",
      },
      {
        heading: "6.2. Cầu mong cơ hội nhưng từ chối phương tiện",
        content:
          "Cơ hội thường đến dưới dạng những VIỆC CẦN LÀM, không phải phép màu. Rất nhiều người cầu mong cơ hội nhưng lại từ chối chính phương tiện mang cơ hội đến.\n\n" +
          "Muốn thân hình đẹp nhưng không tập, không ăn đúng. Muốn thu nhập tốt hơn nhưng không gọi khách, không học. Muốn cuộc sống tốt hơn nhưng sống y như hôm qua.\n\n" +
          "Ông Darrell có niềm tin, có suy nghĩ tích cực — nhưng KHÔNG hành động. Đó cũng là cái bẫy của nhiều người: đọc sách, xem video, nghe podcast, hừng hực động lực... rồi không bắt tay làm.",
      },
      {
        heading: "6.3. Hành động biến mọi thứ thành kết quả",
        content:
          "Chỉ HÀNH ĐỘNG mới biến: kiến thức → kết quả; cơ hội → thu nhập; tiềm năng → hiện thực.\n\n" +
          "Vũ trụ tưởng thưởng cho sự CHUYỂN ĐỘNG, không phải cho ý định, lời than, giấc mơ hay lý thuyết. Người thắng thường không phải người biết nhiều nhất hay thông minh nhất — mà là người chịu hành động đủ lâu.",
      },
    ],
    takeaway:
      "Không có gì thay đổi cho đến khi hành vi thay đổi. Hãy dùng những câu chuyện trong khóa này (hoặc tự tạo câu chuyện của riêng bạn) — nhưng quan trọng nhất: PHẢI HÀNH ĐỘNG.",
    reviewQuestions: [
      "Câu chuyện ông Darrell muốn nói điều gì về 'cầu mong' và 'hành động'?",
      "Nêu một ví dụ 'muốn kết quả nhưng từ chối phương tiện' trong đời bạn.",
      "Cam kết MỘT hành động cụ thể bạn sẽ làm trong 24h tới.",
    ],
  },
];

// Tất cả các khóa đào tạo (hiển thị trên trang)
export interface TrainingCourse {
  intro: { title: string; subtitle: string; goal: string; moduleCount: number };
  modules: TrainingModule[];
}

export const COURSES: TrainingCourse[] = [
  { intro: TRAINING_INTRO, modules: TRAINING_MODULES },
  { intro: COURSE2_INTRO, modules: TRAINING_MODULES_2 },
];
