"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Quiz = () => {
  const [name, setName] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [scores, setScores] = useState({
    gentle: 0,     // 溫柔型 - 對應 吉伊卡哇
    cheerful: 0,   // 開朗型 - 對應 小八貓
    energetic: 0,  // 活力型 - 對應 兔兔
    cute: 0,       // 可愛型 - 對應 小桃鼠
    brave: 0,      // 勇敢型 - 對應 海獺勇者
    gourmet: 0,    // 美食型 - 對應 栗子饅頭
    loyal: 0       // 忠誠型 - 對應 風獅爺
  });

  const questions = [
    {
      question: "當朋友遇到困難時，你會怎麼做？",
      answers: [
        { text: "默默陪伴在身邊，給予溫暖", trait: "gentle" },
        { text: "主動提供協助和建議", trait: "cheerful" },
        { text: "用充滿活力的方式鼓勵對方", trait: "energetic" },
        { text: "表現可愛來逗對方開心", trait: "cute" },
        { text: "幫助朋友解決問題", trait: "brave" },
        { text: "請朋友吃美食來放鬆心情", trait: "gourmet" },
        { text: "忠實地守護在朋友身邊", trait: "loyal" }
      ]
    },
    {
      question: "你最常發出什麼樣的聲音？",
      answers: [
        { text: "輕柔的「哇」或「咿」", trait: "gentle" },
        { text: "開朗的笑聲", trait: "cheerful" },
        { text: "充滿活力的「烏拉」", trait: "energetic" },
        { text: "可愛的撒嬌聲", trait: "cute" },
        { text: "充滿自信的宣言", trait: "brave" },
        { text: "享受美食時的讚嘆聲", trait: "gourmet" },
        { text: "認真的應答聲", trait: "loyal" }
      ]
    },
    {
      question: "假日你最想做什麼？",
      answers: [
        { text: "和朋友安靜地待在一起", trait: "gentle" },
        { text: "到處走走看看交新朋友", trait: "cheerful" },
        { text: "進行刺激的戶外活動", trait: "energetic" },
        { text: "拍可愛的照片", trait: "cute" },
        { text: "練習新技能", trait: "brave" },
        { text: "品嚐美食", trait: "gourmet" },
        { text: "幫助需要的人", trait: "loyal" }
      ]
    },
    {
      question: "遇到困難時，你會？",
      answers: [
        { text: "尋求朋友的幫助", trait: "gentle" },
        { text: "樂觀面對", trait: "cheerful" },
        { text: "大聲喊出「加油」", trait: "energetic" },
        { text: "用可愛來化解困境", trait: "cute" },
        { text: "勇敢面對挑戰", trait: "brave" },
        { text: "吃點好吃的提升心情", trait: "gourmet" },
        { text: "堅持到底", trait: "loyal" }
      ]
    },
    {
      question: "朋友眼中的你是？",
      answers: [
        { text: "溫暖的小太陽", trait: "gentle" },
        { text: "開朗的開心果", trait: "cheerful" },
        { text: "活力充沛的開心果", trait: "energetic" },
        { text: "人見人愛的可愛擔當", trait: "cute" },
        { text: "可靠的後盾", trait: "brave" },
        { text: "美食專家", trait: "gourmet" },
        { text: "忠實的夥伴", trait: "loyal" }
      ]
    }
  ];

  const characters = {
    gentle: {
      name: "吉伊卡哇",
      description: "你就像吉伊卡哇一樣，性格柔軟又愛哭，但內心充滿善良，總是能成為溫暖朋友們的小太陽。雖然不善言詞，但你的溫柔能觸動每個人的心。",
      color: "text-blue-500",
      bgImage: "/images/gentle.jpg"
    },
    cheerful: {
      name: "小八貓",
      description: "你和小八貓一樣大方又開朗，善於溝通理解他人。你總是能用你開朗的性格照亮周圍的人，是個值得信賴的好朋友。",
      color: "text-gray-600",
      bgImage: "/images/cheerful.jpg"
    },
    energetic: {
      name: "兔兔",
      description: "你就像兔兔一樣充滿活力，喜歡大聲表達自己的想法。你是朋友們的活力擔當，總能為周圍帶來歡樂的氣氛。",
      color: "text-purple-500",
      bgImage: "/images/energetic.jpg"
    },
    cute: {
      name: "小桃鼠",
      description: "你和小桃鼠一樣擅長展現可愛的一面，知道如何讓自己受歡迎。你的可愛不僅能融化他人的心，還能巧妙地獲得幫助。",
      color: "text-pink-500",
      bgImage: "/images/cute.jpg"
    },
    brave: {
      name: "海獺勇者",
      description: "你像海獺勇者一樣勇敢強壯，面對困難時總是勇往直前。你的勇氣和實力讓周圍的人都非常信賴和崇拜。",
      color: "text-yellow-600",
      bgImage: "/images/brave.jpg"
    },
    gourmet: {
      name: "栗子饅頭",
      description: "你和栗子饅頭一樣，是個真正的美食家。雖然外表可愛，但內心住著一個熱愛生活、享受美食的靈魂。",
      color: "text-brown-500",
      bgImage: "/images/gourmet.jpg"
    },
    loyal: {
      name: "風獅爺",
      description: "你像風獅爺一樣忠誠可靠，對重要的人充滿敬意。你的認真態度和忠誠品格讓人感到溫暖可靠。",
      color: "text-red-500",
      bgImage: "/images/loyal.jpg"
    }
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setShowNameInput(false);
    }
  };

  const handleAnswer = (trait) => {
    setScores(prev => ({
      ...prev,
      [trait]: prev[trait] + 1
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const maxScore = Math.max(...Object.values(scores));
    const result = Object.entries(scores).find(([_, score]) => score === maxScore)[0];
    return characters[result];
  };

  const resetQuiz = () => {
    setShowNameInput(true);
    setName('');
    setCurrentQuestion(0);
    setShowResult(false);
    setScores({
      gentle: 0,
      cheerful: 0,
      energetic: 0,
      cute: 0,
      brave: 0,
      gourmet: 0,
      loyal: 0
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto min-h-screen">
        {showResult ? (
          <div 
            className="min-h-screen relative bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${getResult().bgImage})`,
              height: '100vh'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50">
              <div className="p-6 text-white">
                <h2 className="text-3xl font-bold mb-4 text-center">測驗結果</h2>
                <div className="text-xl mb-4 text-center">
                  親愛的 {name}，你最接近的角色是：
                  <div className={`text-2xl font-bold mt-2 ${getResult().color}`}>
                    {getResult().name}
                  </div>
                </div>
                <div className="bg-black bg-opacity-50 p-6 rounded-lg mb-6">
                  <p className="text-lg leading-relaxed">
                    {getResult().description}
                  </p>
                </div>
                <div className="flex justify-center space-x-4">
                  <Button 
                    onClick={resetQuiz}
                    className="bg-white text-black hover:bg-gray-200"
                  >
                    重新測驗
                  </Button>
                  <Button
                    className="bg-blue-500 hover:bg-blue-600"
                    onClick={() => {
                      // 在這裡實現截圖功能
                    }}
                  >
                    分享結果
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Card className="min-h-screen">
            <CardContent className="p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
                吉伊卡哇角色心理測驗
              </h1>
              
              {showNameInput ? (
                <form onSubmit={handleNameSubmit} className="space-y-4">
                  <div className="text-center">
                    <label htmlFor="name" className="block text-lg mb-2">
                      請輸入你的名字
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="max-w-xs mx-auto"
                      required
                    />
                  </div>
                  <div className="text-center">
                    <Button type="submit">
                      開始測驗
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="text-xl font-medium mb-4">
                    問題 {currentQuestion + 1} / {questions.length}
                  </div>
                  <div className="text-lg mb-6">
                    {questions[currentQuestion].question}
                  </div>
                  <div className="space-y-4">
                    {questions[currentQuestion].answers.map((answer, index) => (
                      <Button
                        key={index}
                        className="w-full text-left p-4 hover:bg-gray-100"
                        onClick={() => handleAnswer(answer.trait)}
                      >
                        {answer.text}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Quiz;