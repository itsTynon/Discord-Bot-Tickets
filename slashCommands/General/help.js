const _0x4a91c2=_0x23d1;(function(_0x15a0d4,_0x5e96bd){const _0x3b14ca=_0x23d1,_0x59a93b=_0x15a0d4();while(!![]){try{const _0x11a78f=parseInt(_0x3b14ca(0x117))/0x1*(parseInt(_0x3b14ca(0x111))/0x2)+-parseInt(_0x3b14ca(0xf9))/0x3+-parseInt(_0x3b14ca(0x12a))/0x4*(-parseInt(_0x3b14ca(0x125))/0x5)+parseInt(_0x3b14ca(0x106))/0x6*(parseInt(_0x3b14ca(0x118))/0x7)+-parseInt(_0x3b14ca(0x11d))/0x8*(-parseInt(_0x3b14ca(0x103))/0x9)+-parseInt(_0x3b14ca(0xf7))/0xa*(parseInt(_0x3b14ca(0x112))/0xb)+-parseInt(_0x3b14ca(0xfa))/0xc;if(_0x11a78f===_0x5e96bd)break;else _0x59a93b['push'](_0x59a93b['shift']());}catch(_0x2ab84a){_0x59a93b['push'](_0x59a93b['shift']());}}}(_0x1a01,0x529de));const _0x209cfe=(function(){let _0x21bc62=!![];return function(_0x5207a0,_0x5046e7){const _0x582553=_0x23d1;if(_0x582553(0x11e)!==_0x582553(0x114)){const _0x22401e=_0x21bc62?function(){const _0x534ebe=_0x582553;if(_0x534ebe(0x108)===_0x534ebe(0x108)){if(_0x5046e7){const _0x1d5e30=_0x5046e7[_0x534ebe(0x128)](_0x5207a0,arguments);return _0x5046e7=null,_0x1d5e30;}}else{if(_0x533032){const _0x1e6a21=_0x5bf49e['apply'](_0x40df15,arguments);return _0x54ce1d=null,_0x1e6a21;}}}:function(){};return _0x21bc62=![],_0x22401e;}else{const _0x159cf3=_0x41d2fd?function(){const _0x3d1802=_0x582553;if(_0x3187f9){const _0x58e6f4=_0x1c3e00[_0x3d1802(0x128)](_0x1da719,arguments);return _0x2ea131=null,_0x58e6f4;}}:function(){};return _0x1ffb14=![],_0x159cf3;}};}()),_0x2d532e=_0x209cfe(this,function(){const _0xfb7d6a=_0x23d1;return _0x2d532e[_0xfb7d6a(0x105)]()[_0xfb7d6a(0x124)]('(((.+)+)+)+$')[_0xfb7d6a(0x105)]()[_0xfb7d6a(0x10c)](_0x2d532e)[_0xfb7d6a(0x124)]('(((.+)+)+)+$');});_0x2d532e();const {SlashCommandBuilder}=require(_0x4a91c2(0xfb)),Discord=require(_0x4a91c2(0x11b)),fs=require('fs'),yaml=require(_0x4a91c2(0x126)),config=yaml[_0x4a91c2(0x10a)](fs[_0x4a91c2(0xf4)](_0x4a91c2(0x11c),_0x4a91c2(0x101))),commands=yaml[_0x4a91c2(0x10a)](fs['readFileSync'](_0x4a91c2(0xfd),_0x4a91c2(0x101)));module[_0x4a91c2(0x10b)]={'enabled':commands['General'][_0x4a91c2(0x122)][_0x4a91c2(0x12b)],'data':new SlashCommandBuilder()[_0x4a91c2(0xf8)](_0x4a91c2(0x102))[_0x4a91c2(0x104)](commands[_0x4a91c2(0xff)][_0x4a91c2(0x122)][_0x4a91c2(0x107)]),async 'execute'(_0x577b40){const _0x4c48ee=_0x4a91c2;let _0x78ccbc=0x4,_0xdff328=0x8,_0x46a51d=0x6,_0x4a0439=_0x577b40['guild']['iconURL'](),_0x3478f2=new Discord['EmbedBuilder']();_0x3478f2['setTitle'](''+config['HelpCommand'][_0x4c48ee(0x120)]['replace'](/{botName}/g,''+config[_0x4c48ee(0x100)]));if(!config['HelpCommand'][_0x4c48ee(0x110)])_0x3478f2[_0x4c48ee(0x10f)](config[_0x4c48ee(0x109)]);if(config[_0x4c48ee(0xf6)][_0x4c48ee(0x110)])_0x3478f2[_0x4c48ee(0x10f)](config[_0x4c48ee(0xf6)][_0x4c48ee(0x110)]);_0x3478f2[_0x4c48ee(0xf5)]([{'name':''+config[_0x4c48ee(0xf6)][_0x4c48ee(0xfc)][_0x4c48ee(0x119)](/{cmdCount}/g,''+_0x78ccbc),'value':_0x4c48ee(0x127)}]),_0x3478f2[_0x4c48ee(0xf5)]([{'name':''+config[_0x4c48ee(0xf6)][_0x4c48ee(0x129)]['replace'](/{cmdCount}/g,''+_0xdff328),'value':_0x4c48ee(0x116)}]),_0x3478f2[_0x4c48ee(0xf5)]([{'name':''+config[_0x4c48ee(0xf6)][_0x4c48ee(0x11a)]['replace'](/{cmdCount}/g,''+_0x46a51d),'value':_0x4c48ee(0x115)}]);if(config[_0x4c48ee(0xf6)]['GuildIcon']&&_0x4a0439)_0x3478f2['setFooter']({'text':''+config['HelpCommand'][_0x4c48ee(0x10d)]['replace'](/{guildName}/g,''+_0x577b40['guild'][_0x4c48ee(0x121)])[_0x4c48ee(0x119)](/{userTag}/g,''+_0x577b40['user'][_0x4c48ee(0x10e)]),'iconURL':''+_0x4a0439});if(!_0x4a0439)_0x3478f2['setFooter']({'text':''+config[_0x4c48ee(0xf6)][_0x4c48ee(0x10d)]['replace'](/{guildName}/g,''+_0x577b40[_0x4c48ee(0x123)][_0x4c48ee(0x121)])[_0x4c48ee(0x119)](/{userTag}/g,''+_0x577b40[_0x4c48ee(0x113)][_0x4c48ee(0x10e)])});if(config['HelpCommand'][_0x4c48ee(0xfe)])_0x3478f2[_0x4c48ee(0x11f)]();_0x577b40['reply']({'embeds':[_0x3478f2]});}};function _0x23d1(_0x1e8290,_0xb45b93){const _0x493588=_0x1a01();return _0x23d1=function(_0x2d532e,_0x209cfe){_0x2d532e=_0x2d532e-0xf4;let _0x1a0150=_0x493588[_0x2d532e];return _0x1a0150;},_0x23d1(_0x1e8290,_0xb45b93);}function _0x1a01(){const _0x363055=['discord.js','./config.yml','272iJApKU','GYhCE','setTimestamp','Title','name','Help','guild','search','4775xaChDP','js-yaml','``help``,\x20``ping``,\x20``suggest``,\x20``stats``','apply','ticketCategory','1788tjhqaA','Enabled','readFileSync','addFields','HelpCommand','32510FLCBNV','setName','2027154fVSzdK','1643040AEBJij','@discordjs/builders','generalCategory','./commands.yml','FooterTimestamp','General','BotName','utf8','help','146790OzDvMX','setDescription','toString','1758QFzHWF','Description','FLFYy','EmbedColors','load','exports','constructor','FooterMsg','tag','setColor','EmbedColor','2AVdnya','1749yYrdDN','user','nnDvd','``paypal``,\x20``crypto``,\x20``stripe``,\x20``calculate``,\x20``blacklist``,\x20``unblacklist``','``add``,\x20``remove``,\x20``panel``\x20``rename``,\x20``close``,\x20``pin``,\x20``delete``,\x20``alert``','31079xRTBsZ','15659RLNvdO','replace','utilityCategory'];_0x1a01=function(){return _0x363055;};return _0x1a01();}