export const onShare = async () => {
 const title = document.title;
 const url = document.querySelector("link[rel=canonical]")
  ? //@ts-ignore
    document.querySelector("link[rel=canonical]").href
  : document.location.href;
 const text = "Learn how to use the share api";

 if (navigator.share) {
  try {
   await navigator.share({
    title,
    url,
    text,
   });
   /*Show a message if the user share something*/
   alert(`Thanks for Sharing!`);
  } catch (err) {
   /*This error will appear if the user cancel the action of sharing.*/
   alert(`Couldn't share ${err}`);
  }
 } else {
  alert(`Не поддерживается`);
 }
};
