
var songrun=false;
var count=1;
var mod=1;
var path=["songs\\Jee Karda.mp3"
,"songs\\Just Go to Hell Dil.mp3"
,"songs\\barish.mp3"
,"songs\\haareya.mp3"
,"songs\\ik vari aa.mp3"
,"songs\\Mercy.mp3"
,"songs\\judaai.mp3"
,"songs\\o saathi.mp3"
,"songs\\rock on.mp3"
,"songs\\Malang.mp3"
,"songs\\jeena jeena.mp3"
,"songs\\Banduk meri laila.mp3"
,"songs\\main tera.mp3"
,"songs\\ban ja rani.mp3"
,"songs\\Hai Junoon.mp3"
,"songs\\Dil Dhadakne Do.mp3"
,"songs\\phir bhi.mp3"
,"songs\\You Are My Sonia.mp3"
,"songs\\Saada Haq.mp3"
,"songs\\Gerua.mp3"
];

var sname=["Jee Karda",
"Just Go to Hell Dil",
"Barish",
"Haareya",
"Ik Vari Aa",
"Mercy",
"Judaai",
"O Saathi",
"Rock on!!",
"Malang",
"Jeena Jeena",
"Banduk Meri Laila",
"Main Tera Boyfriend",
"Ban Ja tu meri Rani",
"Hai Junoon",
"Dil Dhadakne Do",
"Phir Bhi Tumko Chahunga",
"You Are My Sonia",
"Saada Haq",
"Gerua"
];

var sd=["Artists: Divya Kumar<br>Movie: Badlapur<br>Released: 2015<br>Lyricist(s): Priya Panchal<br>Composer(s): Sachin Jigar"
,"Artists: Sunidhi Chauhan<br>Movie: Dear Zindagi<br>Released: 2016<br>Composer(s): Amit Trivedi"
,"Artists: Ash King, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Awards: Zee Cine Award for Song of the Year"
,"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging"
,"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017"
,"Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing"
,"Artist: Rekha Bharadwaj Arijit Singh<br>Movie: Badlapur<br>Released: 2015"
,"Artist: Atif Aslam<br>Movie: Baaghi 2<br>Released: 2018<br>Nominations: Mirchi Music Awards for Listener’s Choice Song of the Year"
,"Artists: Farhan Akhtar<br>Featured artists: Farhan Akhtar Arjun Rampal<br>Movie: Rock On!!<br>Released: 2008"
,"Artists: Siddharth Mahadevan Shilpa Rao<br>Movie: Dhoom 3<br>Released: 2013<br>Composer(s): : Pritam Chakraborty"
,"Artists: Atif Aslam<br>Movie: Badlapur<br>Released: 2015<br>Lyricist(s): Dinesh Vijan Priya Saraiya<br>Composer(s): Sachin Jigar"
,"Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: A Gentleman<br>Released: 2017"
,"Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music"
,"Artist: Guru Randhawa<br>Movie: Tumhari Sulu<br>Released: 2017"
,"Artists: KK<br>Movie: New York<br>Released: 2009<br>Composer(s): : Pritam Chakraborty"
,"Artist: Farhan Akhtar Priyanka Chopra<br>Movie: DIl Dhadakne Do<br>Released: 2015"
,"Artists: Arijit Singh, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Written: 2001 (lyrics)<br>Lyricist(s): Manoj Muntashir<br>Composer(s): Mithoon"
,"Artists: Sonu Nigam, Alka Yagnik, Sandesh Shandilya<br>Movie: Kabhi Khushi Kabhie Gham<br>Released: 2010"
,"Artist: Mohit Chauhan<br>Movie: Rockstar<br>Released: 2011<br>Awards: Guild Award for Best Male Playback Singer<br>Nominations: Filmfare Award for Best Lyricist"
,"Artists: Arijit Singh, Pritam Chakraborty<br>Movie: Dilwale<br>Released: 2015<br>Nominations: Filmfare Award for Best Male Playback Singer<br>Awards: GIMA Award for Most Popular Radio Song of the Year brought to you by Superhits 93.5 Red FM Bajaate Raho"];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\10.jpg",
"images\\\\9.jpg",
"images\\\\3.jpg",
"images\\\\4.jpg",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\2.jpg",
"images\\\\1.jpg",
"images\\\\11.jpg",
"images\\\\12.jpg",
"images\\\\13.jpg",
"images\\\\14.jpg",
"images\\\\15.jpg",
"images\\\\16.jpg",
"images\\\\17.jpg",
"images\\\\18.jpg",
"images\\\\19.jpg",
"images\\\\20.jpg"];

var mood=[["1","2","3"],["4","5"],["6","7","8"],["9","10"],["11","12","13"],["14","15"],["16","17"],["18","19","20"]];
var mmm=["1.png","1.png","5.jpg","2.png","2.png","3.png","3.png","5.jpg","4.png","4.png","5.jpg","1.png", "3.png","2.png","4.png","4.png","3.png","2.png","1.png"];

var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	//ins.onclick=function(){
	//next(this);
  	//};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	/*document.getElementById("queue").appendChild(l);
	eqc=eqc+1;*/
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
					moody(2);
				else if(value=="neutral")
                moody(3);
                else
                moody(4);
            }