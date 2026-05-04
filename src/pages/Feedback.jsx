import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Pilih rating terlebih dahulu!");
      return;
    }
    setIsSubmitting(true);
    try {
      const tabelUlasan = collection(db, "ulasan_pelanggan");
      await addDoc(tabelUlasan, {
        rating_bintang : rating,
        kategori_id :category || "tanpa kategori",
        nama_pengguna : name || "anonim",
        pesan : feedback || "",
        dibuat_pada: serverTimestamp(),

      });
      setIsSuccess(true);
      setIsSubmitting(false);
          setTimeout(() => {
          setRating(0);
          setCategory('');
          setName('');
          setFeedback('');
          setIsSuccess(false);
      }, 4000);
 
    } catch (error) {
      console.error("gagal menyimpan data ulasan ", error);
      setIsSubmitting(false);
      alert("gagal mengirim ulasan, coba lagi")
    }
  }
  const categories = [
    { id: 'bug', label: 'Laporan Bug', icon: 'bug_report' },
    { id: 'feature', label: 'Fitur Baru', icon: 'lightbulb' },
    { id: 'design', label: 'Desain UI/UX', icon: 'palette' },
    { id: 'other', label: 'Lainnya', icon: 'more_horiz' }
  ];

  const getRatingEmoji = () => {
    const val = hoverRating || rating;
    if (val === 1) return { emoji: '😢', text: 'Sangat Buruk' };
    if (val === 2) return { emoji: '😕', text: 'Buruk' };
    if (val === 3) return { emoji: '😐', text: 'Biasa Saja' };
    if (val === 4) return { emoji: '🙂', text: 'Bagus' };
    if (val === 5) return { emoji: '😍', text: 'Luar Biasa!' };
    return { emoji: '🤔', text: 'Bagaimana pengalaman Anda?' };
  };

  

  const { emoji, text } = getRatingEmoji();

  return (
    <div className="min-h-screen bg-surface dark:bg-slate-900 pt-24 pb-20 px-6 font-body">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-300 mb-4 font-headline text-sm font-semibold">
            <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
            Kami Menghargai Ulasan Anda
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface dark:text-white mb-4 tracking-tight">
            Bantu Kami <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Lebih Baik</span>
          </h1>
          <p className="text-lg text-on-surface-variant dark:text-slate-400 max-w-xl mx-auto">
            Masukan Anda sangat berharga bagi kami. Beri tahu kami bagaimana kami bisa meningkatkan pengalaman Anda.
          </p>
        </div>

        {/* Feedback Card */}
        <div 
          className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700/50 relative overflow-hidden"
          data-aos="fade-up"
        >
          {/* Decorative blur blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in relative z-10">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-slate-800 dark:text-white mb-4">Terima Kasih!</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md mx-auto">
                Ulasan Anda telah berhasil dikirim. Kami menghargai waktu yang Anda luangkan untuk membantu kami.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10">
              {/* Rating Section */}
              <div className="flex flex-col items-center mb-12">
                <div className="text-7xl mb-4 transition-transform duration-300 hover:scale-110 cursor-default">
                  {emoji}
                </div>
                <h3 className="text-2xl font-headline font-semibold text-slate-800 dark:text-white mb-6">
                  {text}
                </h3>
                
                <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className={`text-4xl sm:text-5xl transition-all duration-300 transform ${
                        (hoverRating || rating) >= star 
                          ? 'text-yellow-400 scale-110 drop-shadow-md' 
                          : 'text-slate-300 dark:text-slate-600 hover:scale-110'
                      }`}
                    >
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: (hoverRating || rating) >= star ? "'FILL' 1" : "'FILL' 0", fontSize: 'inherit' }}>
                        star
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Content - fades in after rating is selected */}
              <div className={`transition-all duration-500 ${rating > 0 ? 'opacity-100 max-h-[1000px]' : 'opacity-50 max-h-0 overflow-hidden md:opacity-100 md:max-h-[1000px]'}`}>
                
                {/* Name Input */}
                <div className="mb-8">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Nama Anda</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 pl-12 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined pointer-events-none">
                      person
                    </span>
                  </div>
                </div>

                {/* Category Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">Terkait hal apa ini?</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setCategory(cat.id)}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-200 ${
                          category === cat.id 
                            ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 scale-[1.02] shadow-sm' 
                            : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:border-cyan-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                        }`}
                      >
                        <span className="material-symbols-outlined mb-2" style={{ fontVariationSettings: category === cat.id ? "'FILL' 1" : "'FILL' 0" }}>
                          {cat.icon}
                        </span>
                        <span className="text-sm font-medium">{cat.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feedback Textarea */}
                <div className="mb-10">
                  <label htmlFor="feedback" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Detail ulasan Anda</label>
                  <div className="relative">
                    <textarea
                      id="feedback"
                      rows="5"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Beri tahu kami apa yang Anda pikirkan... kami siap mendengarkan!"
                      className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                    {/* Add a little decorative icon inside textarea */}
                    <span className="absolute bottom-4 right-4 text-slate-300 dark:text-slate-600 material-symbols-outlined pointer-events-none">
                      edit_note
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !rating}
                  className={`w-full py-4 rounded-xl font-headline font-semibold text-lg text-white transition-all duration-300 flex items-center justify-center gap-2
                    ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-lg hover:-translate-y-1 hover:from-cyan-500 hover:to-blue-500 active:translate-y-0'}
                    ${!rating ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">refresh</span>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Ulasan 
                      <span className="material-symbols-outlined">send</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
