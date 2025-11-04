export default function handler(req, res) {
  const { buttonIndex } = req.body || {};

  let text = "";
  let image = "https://farcaster-quiz.vercel.app/quiz.png";

  if (buttonIndex === 1) text = "❌ Errado! BTC é do Bitcoin.";
  if (buttonIndex === 2) text = "✅ Certo! ETH é o token nativo do Ethereum.";
  if (buttonIndex === 3) text = "❌ Errado! SOL é da Solana.";

  return res.status(200).json({
    "frame": {
      "version": "vNext",
      "image": image,
      "post_url": "https://farcaster-quiz.vercel.app/api/answer",
      "buttons": [{ "label": "Tentar de novo" }],
      "text": text
    }
  });
}
