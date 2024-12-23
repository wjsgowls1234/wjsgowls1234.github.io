function generateAward() {
    const name = document.getElementById("name").value.trim();
  
    if (!name) {
        alert("수상자 이름을 입력해주세요!");
        return;
    }

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const currentDate = `${year}년 ${month}월 ${date}일`;

    const prefixes = ["열정적인",
                    "가장 빠른",
                    "혁신적인",
                    "웃긴",
                    "최고의",
                    "전설적인",
                    "유쾌한",
                    "기상천외한",
                    "병맛 넘치는",
                    "뻔뻔한",
                    "독보적인",
                    "유머가 넘치는",
                    "끝없는 열정의",
                    "남다른 상상력을 가진",
                    "끝까지 최선을 다한"];

    const awards = ["라면 요리사",
                    "침대 왕",
                    "책상 정리의 신",
                    "구멍 난 양말 컬렉터",
                    "에어컨 리모컨 마스터",
                    "밥 잘 먹는 사람",
                    "가장 느리게 엘리베이터 타기 챔피언",
                    "팀워크 리더",
                    "최고 멘토",
                    "창의력 천재",
                    "의미 없는 회의 생존자",
                    "월요병 극복 대가",
                    "가장 길게 살아남은 팀플 참가자",
                    "사무실 의자 360도 회전 마스터",
                    "커피 애호가",
                    "책상 마스터",
                    "시간 여행자",
                    "다이어트 시도 전문가",
                    "냉장고를 가장 잘 정리한 자",
                    "웃긴 말장난 전문가",
                    "화분 물 주기 천재",
                    "음료수 빨대 컬렉터",
                    "점심시간 행복 전달자",
                    "회식에서 가장 먼저 사라진 사람"];

    const suffix = ["최고의 노력으로",
                    "가장 독창적으로",
                    "세상을 놀라게 하며",
                    "웃음을 전파하며",
                    "유쾌함으로 모두를 감동시키며",
                    "끊임없이 도전하며",
                    "병맛으로 승리하며",
                    "끝없는 노력으로",
                    "다른 사람들에게 영감을 주며",
                    "팀의 성공에 기여하며",
                    "언제나 긍정적인 에너지를 발산하며"];

    const closing1 = [
        "당신의 헌신적인 노력으로 큰 변화를 이루어냈습니다. 이를 통해 많은 이들이 꿈과 희망을 찾았습니다.",
        "그동안 보여주신 열정은 모두에게 감동을 주었습니다. 특히 동료들에게 깊은 영감을 주셨습니다.",
        "주변 사람들에게 끝없는 영감을 주셨습니다. 이로 인해 팀 전체가 성공을 이루는 계기가 되었습니다.",
        "자신만의 방식으로 큰 업적을 이루어내셨습니다. 그 성과는 오랜 시간 동안 모두에게 기억될 것입니다.",
        "탁월한 성과로 많은 사람들에게 귀감이 되었습니다. 이러한 노력은 당신의 진정성을 보여주는 증거입니다.",
        "언제나 최선을 다하는 모습으로 모두를 놀라게 하셨습니다. 특히 어려운 상황에서도 포기하지 않았습니다.",
        "끊임없는 노력으로 불가능을 가능하게 하셨습니다. 이러한 도전 정신은 모두에게 귀감이 됩니다.",
        "놀라운 창의력과 노력으로 변화를 만들어내셨습니다. 그 결과 많은 이들에게 긍정적인 영향을 미쳤습니다."
    ];
    
    const closing2 = [
        "앞으로도 전설로 남으시길 바랍니다. 당신의 이야기는 후손들에게 큰 힘이 될 것입니다.",
        "앞으로 영원히 기억될 것입니다. 이는 단순한 업적을 넘어선 감동의 기록입니다.",
        "모두가 당신을 존경할 것입니다. 이는 단지 노력의 결과가 아닌 진정한 리더십의 산물입니다.",
        "그동안 보여주신 헌신은 결코 잊히지 않을 것입니다. 이는 우리가 함께한 모든 순간의 증거입니다."
    ];                    
  
    const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const awardText = `
        <div class="award-number">
            <h>제 ${year} - 001호</h>
        </div>
        <h2><strong>상 장</strong></h2>
        <p class="award-name"><strong>${random(prefixes)} ${random(awards)} 상</strong></p>
        <p class="award-recipient"><strong>성명: ${name}</strong></p>
        <p class="award-body"><strong>&nbsp;&nbsp;&nbsp;위 사람은 ${random(suffix)} ${random(closing1)} ${random(closing2)}
             더 큰 발전을 기원함에 이 상장을 수여합니다.</strong></p>
        <p class="day">${currentDate}</p>
        <p class="dorami">도라에몽대학교 총장 도라미</p>
    `;  

    document.getElementById("award-container").innerHTML = `
      <div id="award">
        ${awardText}
      </div>
    `;
}

function downloadPDF() {
    const element = document.getElementById("award");

    if (!element) {
        alert("저장할 상장이 없습니다. 상장을 먼저 생성해주세요!");
        return;
    }

    const awardBg = document.getElementById("award-bg");

    html2canvas(document.getElementById("award"), {
        scale: 2,
        useCORS: true,
        allowTaint: false
    }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const { jsPDF } = window.jspdf;

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const imgWidth = pageWidth - 20;
        const imgHeight = (canvas.height * imgWidth) / canvas.width - 18;

        pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
        pdf.save("award.pdf");
    }).catch((error) => {
        console.error("PDF 저장 중 오류 발생:", error);
        alert("PDF 저장 중 오류가 발생했습니다. 다시 시도해주세요.");
    });
}

function generateShareableLink() {
    const element = document.getElementById("award");

    if (!element) {
        alert("공유할 상장이 없습니다. 상장을 먼저 생성해주세요!");
        return;
    }

    html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false
    }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const shareableLink = `${window.location.origin}/?image=${encodeURIComponent(imgData)}`;

        navigator.clipboard.writeText(shareableLink)
            .then(() => {
                alert("공유 가능한 링크가 생성되어 클립보드에 복사되었습니다:\n" + shareableLink);
            })
            .catch((err) => {
                console.error("링크 복사 실패:", err);
                alert("링크 복사에 실패했습니다. 링크를 직접 복사하세요:\n" + shareableLink);
            });
    }).catch((error) => {
        console.error("링크 생성 중 오류 발생:", error);
        alert("링크 생성 중 오류가 발생했습니다. 다시 시도해주세요.");
    });
}

function shareAwardViaKakao() {
    const element = document.getElementById("award");

    if (!element) {
        alert("공유할 상장이 없습니다. 상장을 먼저 생성해주세요!");
        return;
    }

    html2canvas(element, { scale: 2, useCORS: true, allowTaint: false })
        .then((canvas) => {
            const imgData = canvas.toDataURL("image/png");

            Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: '수상장',
                    description: '당신을 위한 특별한 상장!',
                    imageUrl: imgData,
                    link: {
                        webUrl: window.location.href,
                        mobileWebUrl: window.location.href,
                    },
                },
            });
        })
        .catch((error) => {
            console.error("이미지 생성 실패:", error);
            alert("이미지 생성 중 오류가 발생했습니다.");
        });
}
