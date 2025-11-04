export default async function handler(req, res) {
  const { untrustedData } = req.body || {};
  const userAnswer = untrustedData?.buttonIndex;

  let message = "❌ Errado. A resposta certa é ETH.";

  if (userAnswer === 2) {
    message = "✅ Certo! Você acertou!";
  }

  res.status(200).json({
    frame: {
      version: "vNext",
      image: "https://farcaster-quiz.vercel.app/quiz.png",
      post_url: "https://farcaster-quiz.vercel.app/api/answer",
      buttons: [{ label: "Tentar novamente" }],
      state: { message }
    },
  });
}
