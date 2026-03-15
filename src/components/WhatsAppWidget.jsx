const WhatsAppWidget = () => {
  // Your provided WhatsApp number
  const phoneNumber = "254703490346"; 
  
  // A friendly default message
  const defaultMessage = encodeURIComponent("Hello Signet Contractor Limited, I am getting in touch from your website and would like to make an inquiry!");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba56] transition-all duration-300 group animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      {/* Official WhatsApp SVG Icon */}
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.926-7.066A9.92 9.92 0 0012.012 2zm0 18.293c-1.554 0-3.078-.417-4.414-1.206l-.316-.188-3.28.86.877-3.196-.206-.328a8.28 8.28 0 01-1.267-4.418c0-4.57 3.725-8.291 8.303-8.292 2.215 0 4.296.863 5.862 2.43 1.565 1.567 2.428 3.65 2.428 5.865 0 4.57-3.725 8.292-8.303 8.292zm4.582-6.262c-.251-.126-1.488-.734-1.719-.817-.23-.084-.398-.126-.566.126-.168.252-.647.817-.794.985-.146.168-.293.189-.544.063-.251-.126-1.061-.391-2.022-1.251-.747-.668-1.251-1.494-1.398-1.746-.146-.252-.015-.389.111-.514.113-.112.251-.294.376-.441.126-.147.168-.252.251-.421.084-.168.042-.315-.021-.441-.063-.126-.566-1.365-.776-1.87-.203-.493-.41-.426-.566-.434-.146-.007-.314-.008-.482-.008-.167 0-.439.063-.669.315-.23.252-.878.86-.878 2.099 0 1.239.899 2.436 1.025 2.604.126.168 1.776 2.709 4.301 3.799.601.259 1.069.414 1.436.53.604.192 1.154.165 1.588.1.488-.073 1.488-.609 1.698-1.198.21-.588.21-1.092.146-1.198-.063-.105-.23-.168-.481-.294z" />
      </svg>
      
      {/* Tooltip that appears on hover */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us!
        {/* Little triangle pointer */}
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-white"></span>
      </span>
    </a>
  );
};

export default WhatsAppWidget;