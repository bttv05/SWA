const $ = (id) => document.getElementById(id);

const animals = [
  ["Cáo tai to Fennec", "🦊", "Đôi tai lớn giúp tản nhiệt giữa sa mạc."],
  ["Gấu trúc đỏ", "🐼", "Leo cây khéo léo ở rừng núi Himalaya."],
  ["Axolotl", "🦎", "Kỳ giông Mexico có thể tái tạo một số bộ phận cơ thể."],
  ["Thỏ Amami", "🐇", "Loài thỏ cổ xưa sống trên đảo Amami."],
  ["Tê tê", "🦔", "Bộ vảy keratin giúp bảo vệ cơ thể."],
  ["Cu li nhỏ", "🐒", "Linh trưởng mắt tròn hoạt động về đêm."],
  ["Vượn cáo đuôi vòng", "🐒", "Đuôi khoang giúp cả đàn nhận ra nhau."],
  ["Chồn chân đen", "🦦", "Loài chồn Bắc Mỹ được bảo tồn."],
  ["Sóc bay Siberia", "🐿️", "Lướt giữa các thân cây bằng màng da."],
  ["Chuột túi cây", "🦘", "Họ hàng kangaroo sống trên tán cây."],
  ["Okapi", "🦒", "Họ hàng hươu cao cổ với đôi chân có sọc."],
  ["Sao la", "🦌", "Loài thú hiếm sống tại Trường Sơn."],
  ["Hươu chuột Java", "🦌", "Loài thú móng guốc rất nhỏ."],
  ["Báo tuyết", "🐆", "Lông dày giúp sống trên núi cao."],
  ["Linh miêu Iberia", "🐈", "Mèo hoang tai túm lông ở bán đảo Iberia."],
  ["Gấu chó", "🐻", "Loài gấu nhỏ của rừng nhiệt đới."],
  ["Lửng chó", "🦡", "Thú ăn tạp nhỏ ở Đông Nam Á."],
  ["Cáo Bắc Cực", "🦊", "Lông dày đổi màu theo mùa."],
  ["Thú mỏ vịt", "🦦", "Động vật có vú đẻ trứng ở Úc."],
  ["Gấu túi koala", "🐨", "Sống trên cây bạch đàn ở Úc."],
  ["Khỉ vòi", "🐒", "Loài khỉ có chiếc mũi đặc trưng ở Borneo."],
  ["Khỉ sư tử vàng", "🐒", "Bộ lông vàng nổi bật trong rừng Đại Tây Dương."],
  ["Voọc chà vá chân nâu", "🐒", "Linh trưởng nhiều màu ở miền Trung Việt Nam."],
  ["Đười ươi Sumatra", "🦧", "Khéo tay và dành nhiều thời gian trên cây."],
  ["Aye-aye", "🐒", "Dùng ngón tay dài tìm thức ăn."],
  ["Tarsier", "🐒", "Đôi mắt lớn giúp nhìn trong bóng tối."],
  ["Kakapo", "🦜", "Vẹt New Zealand không bay."],
  ["Kea", "🦜", "Vẹt núi New Zealand rất tò mò."],
  ["Chim mỏ sừng", "🦜", "Giúp phát tán hạt cây rừng."],
  ["Chim kiwi", "🐦", "Chim nhỏ không bay của New Zealand."],
  ["Cá heo sông Hồng", "🐬", "Một số cá thể có màu hồng nhạt."],
  ["Cá voi xanh", "🐳", "Động vật lớn nhất từng sống trên Trái Đất."],
  ["Cá voi beluga", "🐋", "Cá voi trắng giao tiếp bằng nhiều âm thanh."],
  ["Hải cẩu thầy tu", "🦭", "Hải cẩu hiếm sống gần các bãi biển."],
  ["Lợn biển", "🦭", "Thú biển hiền hòa ăn thực vật."],
  ["Cá mập voi", "🦈", "Loài cá lớn lọc sinh vật phù du."],
  ["Cá đuối manta", "🐟", "Đôi vây rộng như cánh."],
  ["Cá ngựa lùn", "🌊", "Ngụy trang giữa san hô."],
  ["Rùa biển đồi mồi", "🐢", "Có mỏ cong và sống ở rạn san hô."],
  ["Cá nóc gai", "🐡", "Có thể phồng mình để tự vệ."],
  ["Rùa khổng lồ Galápagos", "🐢", "Loài rùa sống rất lâu."],
  ["Rùa sao Madagascar", "🐢", "Mai có hoa văn như những ngôi sao."],
  ["Tắc kè hoa Parson", "🦎", "Đôi mắt quan sát rất linh hoạt."],
  ["Cự đà biển", "🦎", "Lặn xuống biển để ăn tảo."],
  ["Kỳ nhông lá", "🦎", "Đuôi giống chiếc lá giúp ẩn mình."],
  ["Ếch phi tiêu xanh", "🐸", "Màu sắc nổi bật báo hiệu nguy hiểm."],
  ["Ếch thủy tinh", "🐸", "Có da bụng trong mờ."],
  ["Bướm cánh chim Queen Alexandra", "🦋", "Một trong những loài bướm lớn nhất."],
  ["Bọ ngựa hoa lan", "🦗", "Hình dáng giống cánh hoa."],
  ["Cua dừa", "🦀", "Loài cua sống trên cạn có thể trèo cây."]
];

const banks = [
  {
    words: [["cat", "mèo"], ["dog", "chó"], ["bird", "chim"], ["tree", "cây"], ["sun", "mặt trời"], ["rain", "mưa"], ["red", "đỏ"], ["blue", "xanh dương"], ["one", "một"], ["two", "hai"]],
    grammar: [["I ___ happy.", "am", "is", "are"], ["This ___ a cat.", "is", "are", "am"], ["Two ___.", "dogs", "dog", "doges"]],
    talk: [["Chào buổi sáng.", "Good morning!", "Good night!", "Goodbye!"], ["Nói cảm ơn.", "Thank you!", "See you!", "Hello!"]],
    sentences: ["I see a cat.", "The sun is red.", "This is my dog."]
  },
  {
    words: [["apple", "táo"], ["banana", "chuối"], ["milk", "sữa"], ["water", "nước"], ["family", "gia đình"], ["mother", "mẹ"], ["father", "bố"], ["sister", "chị hoặc em gái"], ["breakfast", "bữa sáng"], ["yellow", "vàng"]],
    grammar: [["I ___ an apple.", "have", "has", "having"], ["She ___ milk.", "likes", "like", "liking"], ["There ___ two bananas.", "are", "is", "am"]],
    talk: [["Xin nước lịch sự.", "Can I have some water, please?", "I am water.", "Water is blue."], ["Nói em thích chuối.", "I like bananas.", "I am a banana.", "Bananas likes me."]],
    sentences: ["I like apples.", "My sister has a bag.", "Can I have water?"]
  },
  {
    words: [["classroom", "lớp học"], ["library", "thư viện"], ["teacher", "giáo viên"], ["pencil", "bút chì"], ["ruler", "thước kẻ"], ["schoolbag", "cặp sách"], ["bicycle", "xe đạp"], ["usually", "thường xuyên"], ["homework", "bài tập về nhà"], ["morning", "buổi sáng"]],
    grammar: [["She ___ to school.", "goes", "go", "going"], ["We ___ English.", "study", "studies", "studying"], ["He ___ a pencil.", "has", "have", "having"]],
    talk: [["Mượn bút chì lịch sự.", "May I borrow your pencil?", "I am a pencil.", "Give me pencil."], ["Hỏi vị trí thư viện.", "Where is the library?", "Who is the library?", "What color is library?"]],
    sentences: ["I go to school.", "The teacher is kind.", "My pencil is blue."]
  },
  {
    words: [["ocean", "đại dương"], ["habitat", "môi trường sống"], ["island", "đảo"], ["protect", "bảo vệ"], ["pollution", "ô nhiễm"], ["recycle", "tái chế"], ["endangered", "có nguy cơ tuyệt chủng"], ["forest", "rừng"], ["wildlife", "động vật hoang dã"], ["environment", "môi trường"]],
    grammar: [["The turtles ___ swimming.", "are", "is", "am"], ["We can ___ bottles.", "recycle", "recycles", "recycling"], ["There ___ many trees.", "are", "is", "am"]],
    talk: [["Rủ bạn dọn bãi biển.", "Let's clean the beach!", "The beach cleans us.", "I am a beach."], ["Nói không vứt rác.", "Please don't drop litter.", "Please drop litter.", "The litter is happy."]],
    sentences: ["We protect the ocean.", "The turtle lives in the sea.", "We can recycle paper."]
  },
  {
    words: [["conservation", "bảo tồn"], ["biodiversity", "đa dạng sinh học"], ["adaptation", "sự thích nghi"], ["species", "loài"], ["research", "nghiên cứu"], ["evidence", "bằng chứng"], ["sustainable", "bền vững"], ["community", "cộng đồng"], ["climate", "khí hậu"], ["responsibility", "trách nhiệm"]],
    grammar: [["Animals ___ shelter.", "need", "needs", "needing"], ["She ___ about wildlife yesterday.", "learned", "learn", "learns"], ["We should ___ species.", "protect", "protects", "protected"]],
    talk: [["Nêu ý kiến bảo tồn.", "I think we should protect habitats.", "Habitats are a pencil.", "I am an island."], ["Đề nghị cùng nghiên cứu.", "Let's research this animal together.", "We researched tomorrow.", "Research is a color."]],
    sentences: ["We should protect wildlife.", "A healthy forest helps animals.", "Our community can plant trees."]
  }
];

const completed = Array(50).fill(false);
const best = Array(50).fill(0);
let stage = 0, question = 0, score = 0, answered = false, filter = "all", sound = true, audioContext;

function tone(kind) {
  if (!sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") audioContext.resume();
    (kind === "win" ? [523, 659, 784] : kind === "right" ? [523, 659] : [330, 294]).forEach((frequency, i) => {
      const o = audioContext.createOscillator(), g = audioContext.createGain(), t = audioContext.currentTime + i * .12;
      o.frequency.value = frequency;
      g.gain.setValueAtTime(.0001, t);
      g.gain.exponentialRampToValueAtTime(.06, t + .015);
      g.gain.exponentialRampToValueAtTime(.0001, t + .19);
      o.connect(g);
      g.connect(audioContext.destination);
      o.start(t);
      o.stop(t + .2);
    });
  } catch (e) {}
}

function stopSpeech() {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
}

function show(id) {
  stopSpeech();
  document.querySelectorAll(".screen").forEach(el => el.hidden = el.id !== id);
  document.querySelectorAll(".nav-button").forEach(b => b.classList.toggle("active", b.dataset.view === id));
  if (id === "report") updateReport();
  if (id === "album") renderAlbum();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function normalized(s) {
  return s.toLowerCase().normalize("NFKC").replace(/[.,!?;:’']/g, "").replace(/\s+/g, " ").trim();
}

function choice(prompt, correct, wrong1, wrong2, kind) {
  return { prompt, kind, options: [correct, wrong1, wrong2], answer: correct };
}

function questionFor(s, n) {
  const level = Math.floor(s / 10), bank = banks[level], offset = (s * 7 + n) % 10;
  const word = bank.words[offset], g = bank.grammar[(s + n) % 3], t = bank.talk[(s + n) % 2];
  const sentence = bank.sentences[(s + n) % 3];
  const tag = `Chặng ${s + 1} · Câu ${n + 1} · ${animals[s][0]}`;

  switch (n % 10) {
    case 0:
    case 1:
      return choice(`${tag}: “${word[0]}” nghĩa là gì?`, word[1], bank.words[(n + offset + 3) % 10][1], bank.words[(n + offset + 6) % 10][1], "Từ vựng · trắc nghiệm");
    case 2:
      return choice(`${tag}: Chọn từ đúng: ${g[0]}`, g[1], g[2], g[3], "Ngữ pháp · điền từ");
    case 3:
      return choice(`${tag}: ${t[0]}`, t[1], t[2], t[3], "Giao tiếp");
    case 4:
      return { prompt: `${tag}: Nhấn Nghe rồi chọn câu em nghe được.`, kind: "Nghe · trắc nghiệm", spoken: sentence, options: [sentence, bank.sentences[(n + offset + 1) % 3], bank.sentences[(n + offset + 2) % 3]], answer: sentence };
    case 5:
      return choice(`${tag}: Ghép “${word[0]}” với nghĩa tiếng Việt.`, word[1], bank.words[(n + offset + 4) % 10][1], bank.words[(n + offset + 7) % 10][1], "Ghép từ");
    case 6:
      return { prompt: `${tag}: Viết từ tiếng Anh có nghĩa “${word[1]}”.`, kind: "Writing · viết từ", answer: word[0] };
    case 7:
      return { prompt: `${tag}: Sắp xếp các từ thành câu: ${sentence.replace(/[.!?]/g, "").split(" ").reverse().join(" / ")}`, kind: "Writing · sắp xếp câu", answer: sentence };
    case 8:
      return { prompt: `${tag}: Điền từ còn thiếu để hoàn thành câu: ${g[0]}`, kind: "Writing · điền câu", answer: g[1] };
    default:
      return { prompt: `${tag}: Viết câu tiếng Anh ngắn theo gợi ý: “${sentence}” (có thể chép câu mẫu để luyện viết).`, kind: "Writing · viết câu ngắn", answer: sentence };
  }
}

function renderStages() {
  const grid = $("stage-grid");
  animals.forEach((a, i) => {
    const card = document.createElement("article");
    card.className = "stage-node";
    card.id = `stage-card-${i}`;
    card.innerHTML = `<div class="text-4xl" aria-hidden="true"></div><h3 class="font-bold my-2"></h3><p class="mb-3"></p><span class="badge block w-fit mb-3"></span><button type="button" class="primary stage-start" data-stage="${i}">Bắt đầu chơi →</button>`;
    card.children[0].textContent = a[1];
    card.children[1].textContent = `Chặng ${i + 1}/50 · ${a[0]}`;
    card.children[2].textContent = `20 câu · 1 thẻ linh vật`;
    grid.append(card);
  });
}

function refresh() {
  const count = completed.filter(Boolean).length;
  $("lobby-stages").textContent = `${count}/50`;
  $("lobby-badges").textContent = `${count}/50`;
  $("lobby-points").textContent = String(best.reduce((a, b) => a + b * 5, 0));
  $("map-progress").textContent = `Đã hoàn thành ${count}/50 chặng · ${count}/50 thẻ`;

  document.querySelectorAll(".stage-node").forEach((card, i) => {
    const unlocked = i === 0 || completed[i - 1];
    card.classList.toggle("locked", !unlocked);
    card.querySelector("button").disabled = !unlocked;
    card.querySelector(".badge").textContent = completed[i] ? "✓ Đã nhận 1 thẻ" : unlocked ? "● Sẵn sàng" : "🔒 Hoàn thành chặng trước";
  });
}

function renderQuestion() {
  answered = false;
  const q = questionFor(stage, question);
  $("question-kind").textContent = q.kind;
  $("question-prompt").textContent = q.prompt;
  $("game-stage").textContent = `Chặng ${stage + 1}/50 · Câu ${question + 1}/20`;
  $("game-score").textContent = `Điểm: ${score * 5}`;
  $("progress").setAttribute("aria-valuenow", String(question));
  $("progress-fill").style.width = `${question * 5}%`;
  $("options").replaceChildren();
  $("options").hidden = !q.options;
  $("writing-form").hidden = !!q.options;
  $("writing-answer").value = "";
  $("writing-answer").disabled = false;
  $("writing-form").querySelector("button").disabled = false;
  $("feedback").hidden = true;
  $("next-button").hidden = true;
  $("audio-tools").hidden = !q.spoken;
  $("audio-message").textContent = "";

  if (q.options) {
    const values = [...q.options];
    const rotation = (stage + question) % 3;
    for (let i = 0; i < rotation; i++) values.push(values.shift());
    values.forEach(value => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "option";
      b.textContent = value;
      b.addEventListener("click", () => answer(value));
      $("options").append(b);
    });
  }
}

function writingCorrect(value, q) {
  const input = normalized(value), target = normalized(q.answer);
  if (q.kind.includes("viết câu")) {
    const words = target.split(" ").filter(Boolean);
    return input.split(" ").filter(Boolean).length >= 3 && words.filter(w => input.includes(w)).length >= Math.max(2, Math.ceil(words.length * .5));
  }
  if (q.kind.includes("sắp xếp câu")) {
    return input.split(" ").filter(Boolean).length >= 3 && target.split(" ").every(w => input.includes(w));
  }
  return input === target;
}

function answer(value) {
  if (answered) return;
  answered = true;
  const q = questionFor(stage, question), correct = q.options ? normalized(value) === normalized(q.answer) : writingCorrect(value, q);
  if (correct) score++;

  $("options").querySelectorAll("button").forEach(b => {
    b.disabled = true;
    if (normalized(b.textContent) === normalized(q.answer)) b.classList.add("correct");
    else if (b.textContent === value) b.classList.add("wrong");
  });

  $("writing-answer").disabled = true;
  $("writing-form").querySelector("button").disabled = true;
  $("feedback").textContent = correct ? "Chính xác! +5 điểm. Em giỏi lắm! 🎉" : `Chưa đúng, em thử lại ở lần chơi sau nhé! Đáp án mẫu: ${q.answer}`;
  $("feedback").hidden = false;
  $("game-score").textContent = `Điểm: ${score * 5}`;
  $("next-button").hidden = false;
  tone(correct ? "right" : "wrong");
  $("next-button").focus();
}

function start(i) {
  if (i > 0 && !completed[i - 1]) return;
  stage = i;
  question = 0;
  score = 0;
  show("game");
  renderQuestion();
}

function renderAlbum() {
  const grid = $("album-grid");
  if (!grid.children.length) {
    animals.forEach((a, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "album-card";
      b.dataset.card = i;
      b.innerHTML = '<span class="animal-art" aria-hidden="true"></span><strong class="block mt-3"></strong><span class="block mt-2"></span><span class="badge mt-3"></span>';
      b.children[0].textContent = a[1];
      b.children[1].textContent = a[0];
      grid.append(b);
    });
  }

  [...grid.children].forEach((card, i) => {
    card.hidden = filter !== "all" && Math.floor(i / 10) !== Number(filter);
    card.disabled = !completed[i];
    card.classList.toggle("locked", !completed[i]);
    card.children[2].textContent = completed[i] ? animals[i][2] : "🔒 Hoàn thành đúng chặng để mở thẻ";
    card.children[3].textContent = `${completed[i] ? "✦ Đã mở" : "🔒 Chưa mở"} · Chặng ${i + 1}/50`;
    card.setAttribute("aria-label", `${animals[i][0]}, chặng ${i + 1}, ${completed[i] ? "đã mở" : "chưa mở"}`);
  });

  $("album-count").textContent = filter === "all" ? `${completed.filter(Boolean).length}/50 linh vật đã mở` : `${completed.slice(Number(filter) * 10, Number(filter) * 10 + 10).filter(Boolean).length}/10 linh vật đã mở`;
}

function reportText() {
  const count = completed.filter(Boolean).length;
  return `BÁO CÁO HỌC TẬP SWA\nChặng hoàn thành: ${count}/50\nLinh vật đã mở: ${count}/50\nĐiểm cao nhất tích lũy: ${best.reduce((a, b) => a + b * 5, 0)} điểm\n${count ? "Hãy tiếp tục khích lệ em khám phá mỗi ngày!" : "Mỗi bước nhỏ đều đáng khen. Hãy cùng em bắt đầu chặng 1!"}`;
}

function updateReport() {
  $("report-summary").textContent = reportText();
}

function phone() {
  const n = $("parent-phone").value.replace(/[\s().-]/g, "");
  if (!/^(?:\+84|0)\d{9}$/.test(n)) {
    $("report-status").textContent = "Vui lòng nhập số điện thoại Việt Nam hợp lệ (ví dụ: 0912345678).";
    $("parent-phone").focus();
    return null;
  }
  return n;
}

// Event Listeners
document.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => show(b.dataset.view)));

$("welcome-start").addEventListener("click", () => show("lobby"));

$("stage-grid").addEventListener("click", e => {
  const b = e.target.closest(".stage-start");
  if (b && !b.disabled) start(Number(b.dataset.stage));
});

$("writing-form").addEventListener("submit", e => {
  e.preventDefault();
  if (!$("writing-answer").value.trim()) {
    $("writing-answer").focus();
    return;
  }
  answer($("writing-answer").value);
});

$("next-button").addEventListener("click", () => {
  if (!answered) return;
  stopSpeech();
  if (question < 19) {
    question++;
    renderQuestion();
    return;
  }
  const passed = score >= 14, first = passed && !completed[stage];
  best[stage] = Math.max(best[stage], score);
  if (passed) completed[stage] = true;
  refresh();

  $("result-score").textContent = `${score}/20 câu đúng · ${score * 5} điểm`;
  $("result-message").textContent = passed ? first ? `Tuyệt vời! Em đã nhận thẻ ${animals[stage][0]} và mở chặng ${Math.min(stage + 2, 50)}/50.` : `Em đã vượt chuẩn chặng ${stage + 1}/50 lần nữa!` : "Cần đúng ít nhất 14/20 câu để nhận thẻ và mở chặng tiếp theo.";
  $("result-reward").textContent = passed ? `🏆 ${animals[stage][1]} ${animals[stage][0]} · 1 thẻ của chặng ${stage + 1}` : "🌱 Linh vật đang chờ em ở lần thử tiếp theo";
  show("result");
  tone(passed ? "win" : "wrong");
});

$("retry-button").addEventListener("click", () => start(stage));

$("listen-button").addEventListener("click", () => {
  const spoken = questionFor(stage, question).spoken;
  if (!spoken) return;
  if (!("speechSynthesis" in window)) {
    $("audio-message").textContent = "Trình duyệt chưa hỗ trợ đọc tiếng Anh.";
    return;
  }
  stopSpeech();
  const u = new SpeechSynthesisUtterance(spoken);
  u.lang = "en-US";
  u.rate = stage < 20 ? .78 : .86;
  u.onerror = () => { $("audio-message").textContent = "Không thể phát âm thanh; em vẫn có thể chọn đáp án."; };
  speechSynthesis.speak(u);
  $("audio-message").textContent = "Đang đọc câu tiếng Anh…";
});

$("stop-button").addEventListener("click", () => {
  stopSpeech();
  $("audio-message").textContent = "Đã dừng đọc.";
});

$("sound-toggle").addEventListener("click", () => {
  sound = !sound;
  $("sound-toggle").textContent = sound ? "🔊 Âm thanh: bật" : "🔇 Âm thanh: tắt";
  $("sound-toggle").setAttribute("aria-pressed", String(sound));
  if (!sound) stopSpeech();
});

$("album-filters").addEventListener("click", e => {
  const b = e.target.closest("[data-filter]");
  if (!b) return;
  filter = b.dataset.filter;
  document.querySelectorAll(".filter-button").forEach(x => {
    x.classList.toggle("active", x === b);
    x.setAttribute("aria-pressed", String(x === b));
  });
  $("album-detail").hidden = true;
  renderAlbum();
});

$("album-grid").addEventListener("click", e => {
  const card = e.target.closest("[data-card]");
  if (!card || card.disabled) return;
  const i = Number(card.dataset.card);
  $("album-detail").textContent = `${animals[i][1]} ${animals[i][0]} · Chặng ${i + 1}/50. ${animals[i][2]} Thành tích tốt nhất: ${best[i]}/20 câu.`;
  $("album-detail").hidden = false;
});

$("sms-button").addEventListener("click", () => {
  const n = phone();
  if (!n) return;
  const a = document.createElement("a");
  a.href = `sms:${n}?body=${encodeURIComponent(reportText())}`;
  a.click();
  $("report-status").textContent = "Đã mở ứng dụng tin nhắn. Phụ huynh cần kiểm tra và tự nhấn Gửi.";
});

$("copy-button").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(reportText());
    $("report-status").textContent = "Đã sao chép báo cáo.";
  } catch (e) {
    $("report-status").textContent = "Không thể sao chép tự động. Hãy chọn và sao chép báo cáo phía trên.";
  }
});

$("zalo-button").addEventListener("click", async () => {
  const n = phone();
  if (!n) return;
  try {
    await navigator.clipboard.writeText(reportText());
  } catch (e) {
    $("report-status").textContent = "Hãy sao chép báo cáo phía trên trước khi mở Zalo.";
    return;
  }
  const normalizedNumber = n.startsWith("+84") ? n.slice(1) : "84" + n.slice(1);
  window.open(`https://zalo.me/${normalizedNumber}`, "_blank", "noopener,noreferrer");
  $("report-status").textContent = "Đã sao chép báo cáo và mở Zalo. Hãy kiểm tra người nhận, dán nội dung rồi tự nhấn Gửi.";
});

// Initialize Page
renderStages();
refresh();