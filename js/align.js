/*
Apache License
Version 2.0, January 2004

Copyright 2019 Yu Haopeng atlasbioin4@gmail.com atlas_hp@163.com

Licensed under the Apache License, Version 2.0 (the "License");

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/*

The align.js file is responsible for alignment, that is, sequence alignment using Web worker locally. I know that the current algorithm is not optimal and only work.

I hope we can work together to improve this algorithm and improve the efficiency of the front-end alignment.

------Yours Haopeng Yu
*/
const _0x8aa4=['pos','lastIndex','error','fasHeader','onerror','exec','Selected\x20Fasta\x20file\x20processing\x20','toLowerCase','newPAM','updown','substr','posInfo','Calculation\x20complete.\x20Preparing\x20for\x20display','tpamr','length','slice','spacer','Spacer\x20','index','\x20alignment\x20is\x20completed.\x20The\x20next\x20spacer\x20in\x20alignment','PAM','pro','onload','YUHAOPENG','result','len','mispos','push','join','log','tpam','header','strand','search','genomePro','seq','misSeq','split','replace','add','BOSSA','data','BOSSA-BOSSA','test','loaded'];const _0x3004=function(_0x8aa47,_0x30041e){_0x8aa47=_0x8aa47-0x0;let _0x4ce983=_0x8aa4[_0x8aa47];return _0x4ce983;};let header=new Object();let resultInfoSet=new Set();onmessage=function(_0x597dc2){let _0x2dc601=_0x597dc2['data'][0x0];let _0x3fb09c=_0x597dc2[_0x3004('0x29')][0x1];let _0x3a39e1=_0x597dc2['data'][0x2];let _0x521d7f=_0x597dc2['data'][0x3];let _0x198d11=_0x597dc2[_0x3004('0x29')][0x4];if(_0x198d11){_0x198d11=fastaTrim(_0x198d11);}runAlign(_0x2dc601,_0x3fb09c,_0x3a39e1,_0x521d7f,_0x198d11);};function runAlign(_0x3ab907,_0x3a7aa8,_0x5c0461,_0xfeba81,_0x202efe){let _0x3121c3=_0x3ab907['size'];let _0x577b59=0x400*0x400*0x32;let _0x414958=0x64;let _0x3282b8=new FileReader();let _0x45702d=0x0;let _0x2f4162=0x0;_0x3282b8[_0x3004('0x16')]=async function(_0xeac73b){let _0x7bb51f=fastaTrim(_0x3282b8[_0x3004('0x18')]);if(_0x7bb51f[_0x7bb51f['length']-0x1][_0x3004('0x3')]){header[_0x3004('0x1f')]=_0x7bb51f[_0x7bb51f['length']-0x1][_0x3004('0x3')];header[_0x3004('0x19')]=_0x7bb51f[_0x7bb51f['length']-0x1]['seq'][_0x3004('0xe')];}let _0x232e30=parseInt((_0x45702d+_0x577b59)/_0x3121c3*0x2710)/0x64;if(_0x232e30>0x64){_0x232e30=0x64;};postMessage([0x1,_0x3004('0x22'),_0x232e30]);postMessage([0x2,'genomePro',_0x3004('0x6')+_0x232e30+'%']);let _0x164b65=await runSubAlign(_0x7bb51f,_0x3a7aa8,_0x5c0461,_0xfeba81,_0x232e30,_0x2f4162);if(_0x232e30==0x64){postMessage([0x1,'genomePro',0x64]);postMessage([0x2,_0x3004('0x22'),_0x3004('0xc')]);postMessage([0x3]);postMessage(resultInfoSet);}console[_0x3004('0x1d')](_0x164b65);_0x45702d+=_0xeac73b[_0x3004('0x2c')];if(_0x45702d<_0x3121c3){_0x20e246(_0x45702d-_0x414958);_0x2f4162=0x1;}else{_0x45702d=_0x3121c3;}};_0x3282b8[_0x3004('0x4')]=function(){console[_0x3004('0x1d')](_0x3282b8[_0x3004('0x2')]);};postMessage([0x1,'genomePro',0x0]);postMessage([0x2,_0x3004('0x22'),'Selected\x20Fasta\x20file\x20processing']);_0x20e246(0x0);function _0x20e246(_0x27c470){let _0x58026=_0x3ab907[_0x3004('0xf')](_0x27c470,_0x27c470+_0x577b59);_0x3282b8['readAsText'](_0x58026);}}function runSubAlign(_0x34fa95,_0x43adea,_0x2ae3f1,_0x5163f2,_0x33c45c,_0x2bddb7){return new Promise(function(_0x56285b,_0x42b808){for(let _0x3a0b9c=0x0;_0x3a0b9c<_0x43adea['length'];_0x3a0b9c++){let _0x557113=autoAlign(_0x43adea[_0x3a0b9c],_0x34fa95,_0x2ae3f1,_0x5163f2);postMessage([0x1,'pro',(_0x3a0b9c+0x1)*0x64/_0x43adea[_0x3004('0xe')]]);postMessage([0x2,'pro',_0x3004('0x11')+_0x43adea[_0x3a0b9c][_0x3004('0x12')]+_0x3004('0x13')]);if(_0x3a0b9c==_0x43adea[_0x3004('0xe')]-0x1){postMessage([0x1,_0x3004('0x15'),0x64]);postMessage([0x2,'pro','All\x20spacer\x20complete\x20for\x20this\x20part\x20of\x20genome']);}if(_0x557113['length']==0x0){resultInfoSet['add'](0x0+_0x3004('0x28')+_0x43adea[_0x3a0b9c][_0x3004('0x12')]);}else{for(let _0x53aa21=0x0;_0x53aa21<_0x557113[_0x3004('0xe')];_0x53aa21++){resultInfoSet[_0x3004('0x27')](0x1+_0x3004('0x28')+_0x557113[_0x53aa21][_0x3004('0x12')]+'BOSSA'+_0x557113['length']+_0x3004('0x28')+_0x43adea[0x0][_0x3004('0x9')]+'BOSSA'+_0x557113[_0x53aa21][_0x3004('0x1a')]+'BOSSA'+_0x557113[_0x53aa21][_0x3004('0x23')]+'BOSSA'+_0x557113[_0x53aa21]['strand']+'BOSSA'+_0x557113[_0x53aa21][_0x3004('0x1f')]+'BOSSA'+_0x557113[_0x53aa21][_0x3004('0x0')]+_0x3004('0x28')+_0x557113[_0x53aa21]['newPAM']);}}}_0x56285b(_0x33c45c+'\x20OK');});}function union(_0x429fa6,_0x86b3af){let _0x4d20a6=new Set(_0x429fa6);for(let _0x2b87e9 of _0x86b3af){_0x4d20a6['add'](_0x2b87e9);}return _0x4d20a6;}function fastaTrim(_0x3d71b3){let _0x52bd03=_0x3d71b3['split']('\x0a');let _0x40d3e9=new Array();let _0xbe1284=/^>/;let _0x50de8f=/[^atcgn]/i;let _0x28236f=/^\#/;let _0x1f28f9='';let _0x36b276=new Object();for(let _0xb46bb1=0x0;_0xb46bb1<_0x52bd03[_0x3004('0xe')];_0xb46bb1++){let _0x556f33=_0x52bd03[_0xb46bb1][_0x3004('0x26')](/[\r|\n]/g,'');if(_0x28236f[_0x3004('0x2b')](_0x556f33)){continue;}if(_0xbe1284[_0x3004('0x2b')](_0x556f33)){_0x556f33=_0x556f33[_0x3004('0x26')](/>/,'');if(_0x1f28f9!==''){if(!_0x36b276[_0x3004('0x3')]){_0x36b276['fasHeader']=header['header'];_0x36b276[_0x3004('0x19')]=header['len']+_0x1f28f9['length'];_0x36b276[_0x3004('0x23')]=_0x1f28f9;}else{_0x36b276[_0x3004('0x23')]=_0x1f28f9;_0x36b276[_0x3004('0x19')]=_0x1f28f9[_0x3004('0xe')];}_0x40d3e9[_0x3004('0x1b')](_0x36b276);_0x36b276={};_0x1f28f9='';}_0x36b276['fasHeader']=_0x556f33;}else{if(_0x50de8f['test'](_0x556f33)){header['header']=header[_0x3004('0x1f')]+_0x556f33;}else{_0x1f28f9+=_0x556f33;}}}if(!_0x36b276['fasHeader']){_0x36b276['fasHeader']=header[_0x3004('0x1f')];_0x36b276[_0x3004('0x23')]=_0x1f28f9;_0x36b276[_0x3004('0x19')]=header[_0x3004('0x19')]+_0x1f28f9[_0x3004('0xe')];}else{_0x36b276['seq']=_0x1f28f9;_0x36b276['len']=_0x1f28f9[_0x3004('0xe')];}_0x40d3e9['push'](_0x36b276);_0x36b276={};_0x52bd03=[];return _0x40d3e9;}function rmSubSeq(_0x296298,_0x375ec6){let _0x297bf3=transStrand(_0x296298);for(let _0x2e3e93=0x0;_0x2e3e93<_0x375ec6['length'];_0x2e3e93++){let _0x5ef836=_0x375ec6[_0x2e3e93]['seq']['search'](_0x296298);let _0x1686a5=_0x375ec6[_0x2e3e93][_0x3004('0x23')][_0x3004('0x21')](_0x297bf3);if(_0x5ef836>-0x1){_0x375ec6[_0x2e3e93]['seq']=_0x375ec6[_0x2e3e93][_0x3004('0x23')]['substr'](0x0,_0x5ef836)+_0x375ec6[_0x2e3e93][_0x3004('0x23')][_0x3004('0xa')](_0x5ef836+_0x296298[_0x3004('0xe')]);return _0x375ec6;}else if(_0x1686a5>-0x1){_0x375ec6[_0x2e3e93][_0x3004('0x23')]=_0x375ec6[_0x2e3e93]['seq']['substr'](0x0,_0x1686a5)+_0x375ec6[_0x2e3e93][_0x3004('0x23')][_0x3004('0xa')](_0x1686a5+_0x297bf3['length']);return _0x375ec6;}}return _0x375ec6;}function autoAlign(_0x4d3ca2,_0x3ee60e,_0x72b821,_0xa0bec0){let _0x2836a6=_0x4d3ca2[_0x3004('0x10')];let _0x3dc5f9=transStrand(_0x4d3ca2['spacer']);let _0x2e0614=_0x4d3ca2[_0x3004('0x14')][_0x3004('0xe')];let _0x10d2e=_0x4d3ca2[_0x3004('0x9')];let _0x47a1fd=_0x4d3ca2[_0x3004('0x12')];if(_0x72b821==0x0){return ala0(_0x2836a6,_0x3dc5f9,_0x3ee60e,_0xa0bec0,_0x2e0614,_0x10d2e,_0x47a1fd);}else{return alaplus(_0x2836a6,_0x3dc5f9,_0x3ee60e,_0xa0bec0,_0x2e0614,_0x10d2e,_0x47a1fd,_0x72b821);}}function spSpacer(_0x3db6d2,_0x369f69){let _0x50fabc=parseInt(_0x3db6d2[_0x3004('0xe')]/_0x369f69);let _0x4f92d6=new Array();for(let _0x277044=0x0;_0x277044<_0x369f69-0x1;_0x277044++){let _0x5cedc4=new Object();_0x5cedc4['seq']=_0x3db6d2['substr'](_0x277044*_0x50fabc,_0x50fabc);_0x5cedc4['len']=_0x277044*_0x50fabc;_0x4f92d6['push'](_0x5cedc4);}let _0x77b1ee=new Object();_0x77b1ee[_0x3004('0x23')]=_0x3db6d2['substr']((_0x369f69-0x1)*_0x50fabc);_0x77b1ee['len']=(_0x369f69-0x1)*_0x50fabc;_0x4f92d6['push'](_0x77b1ee);return _0x4f92d6;}function alaplus(_0x55b867,_0x3b0eaa,_0x47f19c,_0x18a98e,_0x4d8367,_0x502636,_0x1138ed,_0x1cdeae){let _0x1ce3ca=new Array();let _0x2caebe=spSpacer(_0x55b867,parseInt(_0x1cdeae)+0x1);let _0xabc80a=_0x55b867[_0x3004('0x7')]()[_0x3004('0x25')]('');let _0x5ab259=spSpacer(_0x3b0eaa,parseInt(_0x1cdeae)+0x1);let _0x3acead=_0x3b0eaa[_0x3004('0x7')]()[_0x3004('0x25')]('');let _0x51400c=new Set();for(let _0x16a983=0x0;_0x16a983<_0x47f19c['length'];_0x16a983++){for(let _0x584142=0x0;_0x584142<_0x2caebe[_0x3004('0xe')];_0x584142++){let _0x43d817=new RegExp(_0x2caebe[_0x584142]['seq'],'ig');while(_0x43d817[_0x3004('0x5')](_0x47f19c[_0x16a983]['seq'])!==null){let _0x4d18cb=_0x43d817[_0x3004('0x1')]-_0x2caebe[_0x584142][_0x3004('0x23')]['length']-_0x2caebe[_0x584142]['len'];let _0x2230a1='';if(_0x502636=='+'){_0x2230a1=_0x47f19c[_0x16a983][_0x3004('0x23')]['substr'](_0x4d18cb+_0x55b867[_0x3004('0xe')],_0x4d8367);}else{_0x2230a1=_0x47f19c[_0x16a983]['seq']['substr'](_0x4d18cb-_0x4d8367,_0x4d8367);}if(!_0x18a98e['tpam'][_0x3004('0x2b')](_0x2230a1)||_0x4d18cb<0x0||_0x47f19c[_0x16a983]['seq'][_0x3004('0xe')]-_0x4d18cb<_0x55b867['length']+0x1||_0x47f19c[_0x16a983]['seq'][_0x3004('0xe')]<_0x55b867['length']+0x1){continue;}let _0x34bb90=al(_0x47f19c[_0x16a983][_0x3004('0x23')]['substr'](_0x4d18cb,_0x55b867[_0x3004('0xe')]),_0xabc80a,_0x1cdeae,_0x2caebe[_0x584142]['seq'][_0x3004('0xe')],_0x2caebe[_0x584142][_0x3004('0x19')]);if(_0x34bb90){if(_0x47f19c[_0x16a983][_0x3004('0x19')]!=_0x47f19c[_0x16a983][_0x3004('0x23')]['length']){_0x4d18cb=_0x47f19c[_0x16a983][_0x3004('0x19')]-_0x47f19c[_0x16a983]['seq'][_0x3004('0xe')]+_0x4d18cb+0x1;}else{_0x4d18cb++;}_0x51400c[_0x3004('0x27')](_0x34bb90[_0x3004('0x24')]+_0x3004('0x28')+_0x34bb90[_0x3004('0xb')]+'BOSSA+BOSSA'+_0x1138ed+_0x3004('0x28')+_0x47f19c[_0x16a983]['fasHeader']+_0x3004('0x28')+_0x4d18cb+'BOSSA'+_0x2230a1);}}let _0x4b28c1=new RegExp(_0x5ab259[_0x584142]['seq'],'ig');while(_0x4b28c1[_0x3004('0x5')](_0x47f19c[_0x16a983][_0x3004('0x23')])!==null){let _0x2ac7d0=_0x4b28c1['lastIndex']-_0x5ab259[_0x584142][_0x3004('0x23')][_0x3004('0xe')]-_0x5ab259[_0x584142]['len'];let _0x2054ce='';if(_0x502636=='+'){_0x2054ce=_0x47f19c[_0x16a983]['seq']['substr'](_0x2ac7d0-_0x4d8367,_0x4d8367);}else{_0x2054ce=_0x47f19c[_0x16a983][_0x3004('0x23')][_0x3004('0xa')](_0x2ac7d0+_0x3b0eaa['length'],_0x4d8367);}if(!_0x18a98e[_0x3004('0xd')][_0x3004('0x2b')](_0x2054ce)||_0x2ac7d0<0x0||_0x47f19c[_0x16a983]['seq']['length']-_0x2ac7d0<_0x55b867['length']+0x1||_0x47f19c[_0x16a983]['seq'][_0x3004('0xe')]<_0x55b867['length']+0x1){continue;}let _0x1f2652=al(_0x47f19c[_0x16a983]['seq'][_0x3004('0xa')](_0x2ac7d0,_0x3b0eaa['length']),_0x3acead,_0x1cdeae);if(_0x1f2652){if(_0x47f19c[_0x16a983]['len']!=_0x47f19c[_0x16a983]['seq']['length']){_0x2ac7d0=_0x47f19c[_0x16a983][_0x3004('0x19')]-_0x47f19c[_0x16a983]['seq'][_0x3004('0xe')]+_0x2ac7d0+0x1;}else{_0x2ac7d0++;}_0x51400c['add'](_0x1f2652['misSeq']+_0x3004('0x28')+_0x1f2652['posInfo']+_0x3004('0x2a')+_0x1138ed+_0x3004('0x28')+_0x47f19c[_0x16a983][_0x3004('0x3')]+_0x3004('0x28')+_0x2ac7d0+'BOSSA'+_0x2054ce);}}}}for(let _0x4a59e0 of _0x51400c){let _0x374316=_0x4a59e0['split'](_0x3004('0x28'));let _0x3788c6=new Object();_0x3788c6[_0x3004('0x23')]=_0x374316[0x0];_0x3788c6[_0x3004('0x20')]=_0x374316[0x2];_0x3788c6['index']=_0x374316[0x3];_0x3788c6['mispos']=_0x374316[0x1];_0x3788c6['header']=_0x374316[0x4];_0x3788c6[_0x3004('0x0')]=_0x374316[0x5];_0x3788c6[_0x3004('0x8')]=_0x374316[0x6];_0x1ce3ca[_0x3004('0x1b')](_0x3788c6);}return _0x1ce3ca;}function ala0(_0x321d6f,_0x4ec5e6,_0x155a5f,_0x5925d1,_0x564ad9,_0x3c7bc4,_0x65c472){let _0x49819f=new RegExp(_0x321d6f,'ig');let _0x4b2045=new RegExp(_0x4ec5e6,'ig');let _0x406aa4=new Array();for(let _0x402715=0x0;_0x402715<_0x155a5f[_0x3004('0xe')];_0x402715++){while(_0x49819f['exec'](_0x155a5f[_0x402715][_0x3004('0x23')])!==null){_0x5925d1[_0x3004('0x1e')][_0x3004('0x2b')](_0x3004('0x17'));let _0x8f7f2e=_0x49819f['lastIndex']-_0x321d6f['length'];let _0x482135='';if(_0x3c7bc4=='+'){_0x482135=_0x155a5f[_0x402715]['seq'][_0x3004('0xa')](_0x49819f[_0x3004('0x1')],_0x564ad9);}else{_0x482135=_0x155a5f[_0x402715]['seq']['substr'](_0x8f7f2e-_0x564ad9,_0x564ad9);}if(!_0x5925d1['tpam']['test'](_0x482135)){continue;}if(_0x155a5f[_0x402715]['len']!=_0x155a5f[_0x402715]['seq'][_0x3004('0xe')]){_0x8f7f2e=_0x155a5f[_0x402715]['len']-_0x155a5f[_0x402715]['seq'][_0x3004('0xe')]+_0x8f7f2e+0x1;}else{_0x8f7f2e++;}let _0x10b236=new Object();_0x10b236['seq']=_0x321d6f;_0x10b236[_0x3004('0x20')]='+';_0x10b236[_0x3004('0x12')]=_0x65c472;_0x10b236[_0x3004('0x0')]=_0x8f7f2e;_0x10b236['header']=_0x155a5f[_0x402715]['fasHeader'];_0x10b236['newPAM']=_0x482135;_0x406aa4[_0x3004('0x1b')](_0x10b236);}while(_0x4b2045[_0x3004('0x5')](_0x155a5f[_0x402715]['seq'])!==null){_0x5925d1['tpamr'][_0x3004('0x2b')]('YUHAOPENG');let _0x150008=_0x4b2045['lastIndex']-_0x321d6f['length'];let _0x563671='';if(_0x3c7bc4=='+'){_0x563671=_0x155a5f[_0x402715][_0x3004('0x23')][_0x3004('0xa')](_0x150008-_0x564ad9,_0x564ad9);}else{_0x563671=_0x155a5f[_0x402715]['seq'][_0x3004('0xa')](_0x49819f[_0x3004('0x1')],_0x564ad9);}if(!_0x5925d1['tpamr'][_0x3004('0x2b')](_0x563671)){continue;}if(_0x155a5f[_0x402715]['len']!=_0x155a5f[_0x402715]['seq'][_0x3004('0xe')]){_0x150008=_0x155a5f[_0x402715][_0x3004('0x19')]-_0x155a5f[_0x402715]['seq']['length']+_0x150008+0x1;}else{_0x150008++;}let _0x723531=new Object();_0x723531[_0x3004('0x23')]=_0x4ec5e6;_0x723531[_0x3004('0x20')]='-';_0x723531[_0x3004('0x12')]=_0x65c472;_0x723531[_0x3004('0x0')]=_0x150008;_0x723531['header']=_0x155a5f[_0x402715][_0x3004('0x3')];_0x723531['newPAM']=_0x563671;_0x406aa4['push'](_0x723531);}}return _0x406aa4;}function al(_0x431ae1,_0xd2bd6f,_0x5c9eb3,_0x55bab8,_0x4db2ac){_0x431ae1=_0x431ae1[_0x3004('0x7')]();let _0x4e61b8=_0x431ae1[_0x3004('0x25')]('');let _0x323833=0x0;let _0x2a36ee='';let _0x599dda='';for(let _0x192c26=0x0;_0x192c26<_0x4e61b8[_0x3004('0xe')];_0x192c26++){if(_0x4e61b8[_0x192c26]!==_0xd2bd6f[_0x192c26]){_0x599dda+=_0x192c26+0x1+',';_0x323833++;_0x2a36ee+=_0x4e61b8[_0x192c26]['toUpperCase']();}else{_0x2a36ee+=_0x4e61b8[_0x192c26];}if(_0x323833>_0x5c9eb3){return 0x0;}}let _0x5b06c0={'misSeq':_0x2a36ee,'posInfo':_0x599dda};return _0x5b06c0;}function termiSudden(){close();}function transStrand(_0x5356db){'use strict';let _0x2069e1={'A':'T','T':'A','C':'G','G':'C','U':'A','a':'t','t':'a','c':'g','g':'c','u':'a',',':',','-':'-','[':']',']':'['};let _0x172148=_0x5356db['split']('')['reverse']();for(let _0x578788=0x0;_0x578788<_0x172148[_0x3004('0xe')];_0x578788++){_0x172148[_0x578788]=_0x2069e1[_0x172148[_0x578788]];}return _0x172148[_0x3004('0x1c')]('');}