tid = 0;
pause = 0;
var to;
var bcount;
var tcount;

function bannerArray() {
   this.length = 54;
   this[1] = "                           W";
   this[2] = "                          We";
   this[3] = "                         Wel";
   this[4] = "                        Welc";
   this[5] = "                       Welco";
   this[6] = "                      Welcom";
   this[7] = "                     Welcome";
   this[8] = "                    Welcome ";
   this[9] = "                   Welcome t";
   this[10] = "                 Welcome to";
   this[11] = "                Welcome to ";
   this[12] = "               Welcome to M";
   this[13] = "              Welcome to MY";
   this[14] = "             Welcome to MY";
   this[15] = "            Welcome to MY ";
   this[16] = "           Welcome to MY W";
   this[17] = "          Welcome to MY Wo";
   this[18] = "         Welcome to MY Wor";
   this[19] = "        Welcome to MY Worl";
   this[20] = "       Welcome to MY World";
   this[21] = "      Welcome to MY World ";
   this[22] = "     Welcome to MY World !";
   this[23] = "    Welcome to MY World !";
   this[24] = "   Welcome to MY World !";
   this[25] = "  Welcome to  MY World !";
   this[26] = " ";
   this[27] = "  Welcome to  MY World !";
   this[28] = " ";
   this[29] = "  Welcome to MY World ! ";
   this[30] = " Welcome to MY World ! ";
   this[31] = "Welcome to MY World !";
   this[32] = "elcome to MY World !   ";
   this[33] = "lcome to MY World !   ";
   this[34] = "come to MY World !  ";
   this[35] = "ome to MY World ! ";
   this[36] = "me to MY World !";
   this[37] = "e to MY World ! ";
   this[38] = "to MY World !";
   this[39] = "o MY World ! ";
   this[40] = " MY World !";
   this[41] = "MY World !";
   this[42] = "Y World !";
   this[43] = " World !";
   this[44] = "World !";
   this[45] = "orld !";
   this[46] = "rld !";
   this[47] = "ld !";
   this[48] = "d !";
   this[49] = "  !";
   this[50] = "  !";
   this[51] = "  !";
   this[52] = " !";
   this[53] = "!";
   this[54] = "!";
   return this
}


function MakeArray(n) {
	this.length = n;
	return this
}


banner = new bannerArray();
IMAbanner = 1;


function banner1(n) {
		tid=window.setTimeout("banner1(IMAbanner)",to);
		f.result.value = banner[IMAbanner];
                window.status = banner[IMAbanner];
		IMAbanner = IMAbanner + 1;
		if (IMAbanner == 55) {
			IMAbanner = 1;
				window.clearTimeout(tid);
				tid=window.setTimeout("banner1()",to);
		}
}


function start(x) {
		f=x;
                to=60;
		banner1(x);
}






