module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dclisps7d/**",
      },
      {
        protocol: "https",
        hostname: "mai.erpnext.cc",
        port: "",
        pathname: "/dclisps7d/**",
      },
    ],
  },
};
