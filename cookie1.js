(() => {
    const getCookie = (name) => {
      const value = " " + document.cookie;
      console.log("value", `==${value}==`);
      const parts = value.split(" " + name + "=");
      return parts.length < 2 ? undefined : parts.pop().split(";").shift();
    };
  
    const setCookie = function (name, value, expiryDays, domain, path, secure) {
      const exdate = new Date();
      exdate.setHours(
        exdate.getHours() +
          (typeof expiryDays !== "number" ? 365 : expiryDays) * 90
      );
      document.cookie =
        name +
        "=" +
        value +
        ";expires=" +
        exdate.toUTCString() +
        ";path=" +
        (path || "/") +
        (domain ? ";domain=" + domain : "") +
        (secure ? ";secure" : "");
    };
  
    const $cookiesBanner = document.querySelector(".newsletter-banner");
    const $cookiesBannerButton = $cookiesBanner.querySelector("#bannerClose2");
    const cookieName = "cookiesBannersubmit";
    const hasCookie = getCookie(cookieName);
  
    if (!hasCookie) {
      $cookiesBanner.classList.remove("banner-hide");
    }
  
    $cookiesBannerButton.addEventListener("click", () => {
      setCookie(cookieName, "closed");
      $cookiesBanner.remove();
    });
  })();


  