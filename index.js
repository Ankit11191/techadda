//send Email
function sendEmail() {
	Email.send({
        Host: "smtp.gmail.com",
        Username : "techadda.ankit.mittal@gmail.com",
        Password : "hycovwfeaoquhybf",
        To : 'techadda.ankit.mittal@gmail.com',
        From : "techadda.ankit.mittal@gmail.com",
        Subject : "Hi Moto",
        Body : "Testing mail",
	}).then(
		message => alert("mail sent successfully")
	);
}