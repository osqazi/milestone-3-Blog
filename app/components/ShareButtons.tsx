"use client"

export default function ShareButtons() {
  const shareToFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareToWhatsApp = () => {
    const url = window.location.href;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <div className="mt-4 flex space-x-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Like</button>
      <button
        className="bg-gray-300 text-black px-4 py-2 rounded"
        onClick={shareToFacebook}
      >
        Share to Facebook
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={shareToWhatsApp}
      >
        Share to WhatsApp
      </button>
    </div>
  );
}