# @BADBMODER
# https://t.me/mutlcc
#

from userbot.events import register as asena
from userbot.cmdhelp import CmdHelp


basemojitext = [
    "a",
    "b",
    "c",
    "ç",
    "d",
    "e",
    "f",
    "g",
    "ğ",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "ö",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "ü",
    "v",
    "w",
    "x",
    "y",
    "z",
    "@",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
]

emojis = [
    "⁭\
    \n                    💖\
    \n                  💖💖\
    \n               💖💖💖\
    \n            💖💖 💖💖\
    \n          💖💖    💖💖\
    \n        💖💖       💖💖\
    \n      💖💖💖💖💖💖\
    \n     💖💖💖💖💖💖💖\
    \n   💖💖                 💖💖\
    \n  💖💖                    💖💖\
    \n💖💖                       💖💖\
    \n",
    "⁭\
    \n💗💗💗💗💗💗💗\
    \n💗💗💗💗💗💗💗💗\
    \n💗💗                     💗💗\
    \n💗💗                     💗💗\
    \n💗💗💗💗💗💗💗💗\
    \n💗💗💗💗💗💗💗💗\
    \n💗💗                     💗💗\
    \n💗💗                     💗💗\
    \n💗💗💗💗💗💗💗💗\
    \n💗💗💗💗💗💗💗\
    \n",
    "⁭\
    \n          💛💛💛💛💛💛\
    \n     💛💛💛💛💛💛💛💛\
    \n   💛💛                      💛💛\
    \n 💛💛\
    \n💛💛\
    \n💛💛\
    \n 💛💛\
    \n   💛💛                      💛💛\
    \n     💛💛💛💛💛💛💛💛\
    \n         💛💛💛💛💛💛\
    \n",
    "⁭\
    \n          💝💝💝💝💝💝\
    \n     💝💝💝💝💝💝💝💝\
    \n   💝💝                      💝💝\
    \n 💝💝\
    \n💝💝\
    \n💝💝\
    \n 💝💝\
    \n   💝💝                      💝💝\
    \n     💝💝💝💝💝💝💝💝\
    \n         💝💝💝💝💝💝\
    \n\
    \nㅤ               💝💝\
    \n",
    "⁭\
    \n💙💙💙💙💙💙💙\
    \n💙💙💙💙💙💙💙💙\
    \n💙💙                      💙💙\
    \n💙💙                         💙💙\
    \n💙💙                         💙💙\
    \n💙💙                         💙💙\
    \n💙💙                         💙💙\
    \n💙💙                      💙💙\
    \n💙💙💙💙💙💙💙💙\
    \n💙💙💙💙💙💙💙\
    \n",
    "⁭\
    \n💟💟💟💟💟💟💟💟\
    \n💟💟💟💟💟💟💟💟\
    \n💟💟\
    \n💟💟\
    \n💟💟💟💟💟💟\
    \n💟💟💟💟💟💟\
    \n💟💟\
    \n💟💟\
    \n💟💟💟💟💟💟💟💟\
    \n💟💟💟💟💟💟💟💟\
    \n",
    "⁭\
    \n💚💚💚💚💚💚💚💚\
    \n💚💚💚💚💚💚💚💚\
    \n💚💚\
    \n💚💚\
    \n💚💚💚💚💚💚\
    \n💚💚💚💚💚💚\
    \n💚💚\
    \n💚💚\
    \n💚💚\
    \n💚💚\
    \n",
    "⁭\
    \n          💜💜💜💜💜💜\
    \n     💜💜💜💜💜💜💜💜\
    \n   💜💜                     💜💜\
    \n 💜💜\
    \n💜💜                💜💜💜💜\
    \n💜💜                💜💜💜💜\
    \n 💜💜                        💜💜\
    \n   💜💜                      💜💜\
    \n     💜💜💜💜💜💜💜💜\
    \n          💜💜💜💜💜💜\
    \n",
    "\
    \nㅤ      🧡🧡🧡🧡🧡🧡\
    \n\
    \n          🧡🧡🧡🧡🧡🧡\
    \n     🧡🧡🧡🧡🧡🧡🧡🧡\
    \n   🧡🧡                     🧡🧡\
    \n 🧡🧡\
    \n🧡🧡                🧡🧡🧡🧡\
    \n🧡🧡                🧡🧡🧡🧡\
    \n 🧡🧡                        🧡🧡\
    \n   🧡🧡                      🧡🧡\
    \n     🧡🧡🧡🧡🧡🧡🧡🧡\
    \n          🧡🧡🧡🧡🧡🧡\
    \n",
    "⁭\
    \n💖💖                        💖💖\
    \n💖💖                        💖💖\
    \n💖💖                        💖💖\
    \n💖💖                        💖💖\
    \n💖💖💖💖💖💖💖💖💖\
    \n💖💖💖💖💖💖💖💖💖\
    \n💖💖                        💖💖\
    \n💖💖                        💖💖\
    \n💖💖                        💖💖\
    \n💖💖                        💖💖\
    \n",
    "⁭\
    \n💗💗💗💗💗💗\
    \n💗💗💗💗💗💗\
    \n          💗💗\
    \n          💗💗\
    \n          💗💗\
    \n          💗💗\
    \n          💗💗\
    \n          💗💗\
    \n💗💗💗💗💗💗\
    \n💗💗💗💗💗💗\
    \n",
    "⁭\
    \n         💛💛💛💛💛💛\
    \n         💛💛💛💛💛💛\
    \n                  💛💛\
    \n                  💛💛\
    \n                  💛💛\
    \n                  💛💛\
    \n💛💛          💛💛\
    \n  💛💛       💛💛\
    \n   💛💛💛💛💛\
    \n      💛💛💛💛\
    \n",
    "⁭\
    \n💙💙                  💙💙\
    \n💙💙             💙💙\
    \n💙💙        💙💙\
    \n💙💙   💙💙\
    \n💙💙💙💙\
    \n💙💙 💙💙\
    \n💙💙     💙💙\
    \n💙💙         💙💙\
    \n💙💙              💙💙\
    \n💙💙                   💙💙\
    \n",
    "⁭\
    \n💟💟\
    \n💟💟\
    \n💟💟\
    \n💟💟\
    \n💟💟\
    \n💟💟\
    \n💟💟\
    \n💟💟\
    \n💟💟💟💟💟💟💟💟\
    \n💟💟💟💟💟💟💟💟\
    \n",
    "⁭\
    \n💚💚                                    💚💚\
    \n💚💚💚                         💚💚💚\
    \n💚💚💚💚               💚💚💚💚\
    \n💚💚    💚💚       💚💚    💚💚\
    \n💚💚          💚💚💚          💚💚\
    \n💚💚               💚                💚💚\
    \n💚💚                                     💚💚\
    \n💚💚                                     💚💚\
    \n💚💚                                     💚💚\
    \n💚💚                                      💚💚\
    \n",
    "⁭\
    \n💜💜                           💜💜\
    \n💜💜💜                      💜💜\
    \n💜💜💜💜                 💜💜\
    \n💜💜  💜💜               💜💜\
    \n💜💜     💜💜            💜💜\
    \n💜💜         💜💜        💜💜\
    \n💜💜             💜💜    💜💜\
    \n💜💜                 💜💜💜💜\
    \n💜💜                       💜💜💜\
    \n💜💜                             💜💜\
    \n",
    "⁭\
    \n           💖💖💖💖💖\
    \n     💖💖💖💖💖💖💖\
    \n   💖💖                   💖💖\
    \n 💖💖                       💖💖\
    \n💖💖                         💖💖\
    \n💖💖                         💖💖\
    \n 💖💖                       💖💖\
    \n   💖💖                   💖💖\
    \n      💖💖💖💖💖💖💖\
    \n            💖💖💖💖💖\
    \n",
    "\
    \n⁭ㅤ       ❤️❤️     ❤️❤️\
    \n\
    \n           ❤️❤️❤️❤️❤️\
    \n     ❤️❤️❤️❤️❤️❤️❤️\
    \n   ❤️❤️                   ❤️❤️\
    \n ❤️❤️                       ❤️❤️\
    \n❤️❤️                         ❤️❤️\
    \n❤️❤️                         ❤️❤️\
    \n ❤️❤️                       ❤️❤️\
    \n   ❤️❤️                   ❤️❤️\
    \n      ❤️❤️❤️❤️❤️❤️❤️\
    \n            ❤️❤️❤️❤️❤️\
    \n",
    "⁭\
    \n💗💗💗💗💗💗💗\
    \n💗💗💗💗💗💗💗💗\
    \n💗💗                     💗💗\
    \n💗💗                     💗💗\
    \n💗💗💗💗💗💗💗💗\
    \n💗💗💗💗💗💗💗\
    \n💗💗\
    \n💗💗\
    \n💗💗\
    \n💗💗\
    \n",
    "⁭\
    \n           💛💛💛💛💛\
    \n      💛💛💛💛💛💛💛\
    \n   💛💛                    💛💛\
    \n 💛💛                        💛💛\
    \n💛💛                           💛💛\
    \n💛💛              💛💛     💛💛\
    \n 💛💛               💛💛 💛💛\
    \n   💛💛                   💛💛\
    \n      💛💛💛💛💛💛💛💛\
    \n           💛💛💛💛💛   💛💛\
    \n",
    "⁭\
    \n💙💙💙💙💙💙💙\
    \n💙💙💙💙💙💙💙💙\
    \n💙💙                     💙💙\
    \n💙💙                     💙💙\
    \n💙💙💙💙💙💙💙💙\
    \n💙💙💙💙💙💙💙\
    \n💙💙    💙💙\
    \n💙💙         💙💙\
    \n💙💙              💙💙\
    \n💙💙                  💙💙\
    \n",
    "⁭\
    \n       💟💟💟💟💟\
    \n  💟💟💟💟💟💟💟\
    \n  💟💟                 💟💟\
    \n💟💟\
    \n  💟💟💟💟💟💟\
    \n      💟💟💟💟💟💟\
    \n                            💟💟\
    \n💟💟                 💟💟\
    \n  💟💟💟💟💟💟💟\
    \n       💟💟💟💟💟\
    \n",
    "⁭\
    \n💚💚💚💚💚💚💚💚\
    \n💚💚💚💚💚💚💚💚\
    \n               💚💚\
    \n               💚💚\
    \n               💚💚\
    \n               💚💚\
    \n               💚💚\
    \n               💚💚\
    \n               💚💚\
    \n",
    "⁭\
    \n💜💜                      💜💜\
    \n💜💜                      💜💜\
    \n💜💜                      💜💜\
    \n💜💜                      💜💜\
    \n💜💜                      💜💜\
    \n💜💜                      💜💜\
    \n💜💜                      💜💜\
    \n  💜💜                  💜💜\
    \n      💜💜💜💜💜💜\
    \n            💜💜💜💜\
    \n",
    "\
    \n⁭❤️❤️                      ❤️❤️\
    \n\
    \n❤️❤️                      ❤️❤️\
    \n❤️❤️                      ❤️❤️\
    \n❤️❤️                      ❤️❤️\
    \n❤️❤️                      ❤️❤️\
    \n❤️❤️                      ❤️❤️\
    \n❤️❤️                      ❤️❤️\
    \n❤️❤️                      ❤️❤️\
    \n  ❤️❤️                  ❤️❤️\
    \n      ❤️❤️❤️❤️❤️❤️\
    \n            ❤️❤️❤️❤️\
    \n",
    "⁭\
    \n💖💖                              💖💖\
    \n  💖💖                          💖💖\
    \n    💖💖                      💖💖\
    \n      💖💖                  💖💖\
    \n         💖💖              💖💖\
    \n           💖💖         💖💖\
    \n             💖💖     💖💖\
    \n               💖💖 💖💖\
    \n                  💖💖💖\
    \n                       💖\
    \n",
    "⁭\
    \n💗💗                               💗💗\
    \n💗💗                               💗💗\
    \n💗💗                               💗💗\
    \n💗💗                               💗💗\
    \n💗💗              💗            💗💗\
    \n 💗💗           💗💗          💗💗\
    \n 💗💗        💗💗💗       💗💗\
    \n  💗💗   💗💗  💗💗   💗💗\
    \n   💗💗💗💗      💗💗💗💗\
    \n    💗💗💗             💗💗💗\
    \n",
    "⁭\
    \n💛💛                    💛💛\
    \n   💛💛              💛💛\
    \n      💛💛        💛💛\
    \n         💛💛  💛💛\
    \n            💛💛💛\
    \n            💛💛💛\
    \n         💛💛 💛💛\
    \n      💛💛       💛💛\
    \n   💛💛             💛💛\
    \n💛💛                   💛💛\
    \n",
    "⁭\
    \n💙💙                    💙💙\
    \n   💙💙              💙💙\
    \n      💙💙        💙💙\
    \n         💙💙  💙💙\
    \n            💙💙💙\
    \n              💙💙\
    \n              💙💙\
    \n              💙💙\
    \n              💙💙\
    \n              💙💙\
    \n",
    "⁭\
    \n 💟💟💟💟💟💟💟\
    \n 💟💟💟💟💟💟💟\
    \n                       💟💟\
    \n                   💟💟\
    \n               💟💟\
    \n           💟💟\
    \n       💟💟\
    \n   💟💟\
    \n💟💟💟💟💟💟💟\
    \n💟💟💟💟💟💟💟\
    \n",
    "⁭\
    \n\
    \n⁭\
    \n\
    \n⁭\
    \n\
    \n",
    "⁭\
    \n       💗💗💗💗\
    \n   💗💗💗💗💗💗\
    \n💗💗               💗💗\
    \n💗💗               💗💗\
    \n💗💗               💗💗\
    \n💗💗               💗💗\
    \n💗💗               💗💗\
    \n💗💗               💗💗\
    \n   💗💗💗💗💗💗\
    \n        💗💗💗💗\
    \n",
    "⁭\
    \n          💙💙\
    \n     💙💙💙\
    \n💙💙 💙💙\
    \n          💙💙\
    \n          💙💙\
    \n          💙💙\
    \n          💙💙\
    \n          💙💙\
    \n     💙💙💙💙\
    \n     💙💙💙💙\
    \n",
    "⁭\
    \n    💟💟💟💟💟\
    \n  💟💟💟💟💟💟\
    \n💟💟          💟💟\
    \n                💟💟\
    \n             💟💟\
    \n          💟💟\
    \n       💟💟\
    \n    💟💟\
    \n  💟💟💟💟💟💟\
    \n  💟💟💟💟💟💟\
    \n",
    "⁭\
    \n     💛💛💛💛\
    \n  💛💛💛💛💛\
    \n💛💛         💛💛\
    \n                   💛💛\
    \n            💛💛💛\
    \n            💛💛💛\
    \n                   💛💛\
    \n💛💛         💛💛\
    \n  💛💛💛💛💛\
    \n     💛💛💛💛\
    \n",
    "⁭\
    \n                         💖💖\
    \n                    💖💖💖\
    \n              💖💖 💖💖\
    \n          💖💖     💖💖\
    \n     💖💖          💖💖\
    \n💖💖               💖💖\
    \n💖💖💖💖💖💖💖💖💖\
    \n💖💖💖💖💖💖💖💖💖\
    \n                         💖💖\
    \n                         💖💖\
    \n",
    "⁭\
    \n💚💚💚💚💚💚\
    \n💚💚💚💚💚💚\
    \n💚💚\
    \n 💚💚💚💚💚\
    \n   💚💚💚💚💚\
    \n                    💚💚\
    \n                    💚💚\
    \n💚💚          💚💚\
    \n  💚💚💚💚💚\
    \n     💚💚💚💚\
    \n",
    "⁭\
    \n        💜💜💜💜\
    \n    💜💜💜💜💜\
    \n💜💜\
    \n💜💜\
    \n💜💜💜💜💜💜\
    \n💜💜💜💜💜💜💜\
    \n💜💜               💜💜\
    \n💜💜               💜💜\
    \n    💜💜💜💜💜💜\
    \n        💜💜💜💜\
    \n",
    "⁭\
    \n💗💗💗💗💗💗💗\
    \n💗💗💗💗💗💗💗\
    \n                      💗💗\
    \n                     💗💗\
    \n                   💗💗\
    \n                 💗💗\
    \n               💗💗\
    \n             💗💗\
    \n           💗💗\
    \n         💗💗\
    \n",
    "⁭\
    \n        💙💙💙💙\
    \n   💙💙💙💙💙💙\
    \n💙💙               💙💙\
    \n💙💙               💙💙\
    \n   💙💙💙💙💙💙\
    \n   💙💙💙💙💙💙\
    \n💙💙               💙💙\
    \n💙💙               💙💙\
    \n   💙💙💙💙💙💙\
    \n        💙💙💙💙\
    \n",
    "⁭\
    \n        💟💟💟💟\
    \n   💟💟💟💟💟💟\
    \n💟💟               💟💟\
    \n💟💟               💟💟\
    \n 💟💟💟💟💟💟💟\
    \n      💟💟💟💟💟💟\
    \n                         💟💟\
    \n                        💟💟\
    \n  💟💟💟💟💟💟\
    \n       💟💟💟💟\
    \n",
]

cmojis = [
    "⁭\
    \n                    {e}\
    \n                  {e}{e}\
    \n               {e}{e}{e}\
    \n            {e}{e} {e}{e}\
    \n          {e}{e}    {e}{e}\
    \n        {e}{e}       {e}{e}\
    \n      {e}{e}{e}{e}{e}{e}\
    \n     {e}{e}{e}{e}{e}{e}{e}\
    \n   {e}{e}                 {e}{e}\
    \n  {e}{e}                    {e}{e}\
    \n{e}{e}                       {e}{e}\
    \n",
    "⁭\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}                     {e}{e}\
    \n{e}{e}                     {e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}                     {e}{e}\
    \n{e}{e}                     {e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n",
    "⁭\
    \n          {e}{e}{e}{e}{e}{e}\
    \n     {e}{e}{e}{e}{e}{e}{e}{e}\
    \n   {e}{e}                      {e}{e}\
    \n {e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n {e}{e}\
    \n   {e}{e}                      {e}{e}\
    \n     {e}{e}{e}{e}{e}{e}{e}{e}\
    \n         {e}{e}{e}{e}{e}{e}\
    \n",
    "⁭\
    \n          {e}{e}{e}{e}{e}{e}\
    \n     {e}{e}{e}{e}{e}{e}{e}{e}\
    \n   {e}{e}                      {e}{e}\
    \n {e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n {e}{e}\
    \n   {e}{e}                      {e}{e}\
    \n     {e}{e}{e}{e}{e}{e}{e}{e}\
    \n         {e}{e}{e}{e}{e}{e}\
    \n\
    \nㅤ                 {e}{e}\
    \n",
    "⁭\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                         {e}{e}\
    \n{e}{e}                         {e}{e}\
    \n{e}{e}                         {e}{e}\
    \n{e}{e}                         {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n",
    "⁭\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n",
    "⁭\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n",
    "⁭\
    \n          {e}{e}{e}{e}{e}{e}\
    \n     {e}{e}{e}{e}{e}{e}{e}{e}\
    \n   {e}{e}                     {e}{e}\
    \n {e}{e}\
    \n{e}{e}                {e}{e}{e}{e}\
    \n{e}{e}                {e}{e}{e}{e}\
    \n {e}{e}                        {e}{e}\
    \n   {e}{e}                      {e}{e}\
    \n     {e}{e}{e}{e}{e}{e}{e}{e}\
    \n          {e}{e}{e}{e}{e}{e}\
    \n",
    "\
    \nㅤ      {e}{e}{e}{e}{e}{e}\
    \n\
    \n          {e}{e}{e}{e}{e}{e}\
    \n     {e}{e}{e}{e}{e}{e}{e}{e}\
    \n   {e}{e}                     {e}{e}\
    \n {e}{e}\
    \n{e}{e}                {e}{e}{e}{e}\
    \n{e}{e}                {e}{e}{e}{e}\
    \n {e}{e}                        {e}{e}\
    \n   {e}{e}                      {e}{e}\
    \n     {e}{e}{e}{e}{e}{e}{e}{e}\
    \n          {e}{e}{e}{e}{e}{e}\
    \n",
    "⁭\
    \n{e}{e}                        {e}{e}\
    \n{e}{e}                        {e}{e}\
    \n{e}{e}                        {e}{e}\
    \n{e}{e}                        {e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}                        {e}{e}\
    \n{e}{e}                        {e}{e}\
    \n{e}{e}                        {e}{e}\
    \n{e}{e}                        {e}{e}\
    \n",
    "⁭\
    \n{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}\
    \n          {e}{e}\
    \n          {e}{e}\
    \n          {e}{e}\
    \n          {e}{e}\
    \n          {e}{e}\
    \n          {e}{e}\
    \n{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}\
    \n",
    "⁭\
    \n         {e}{e}{e}{e}{e}{e}\
    \n         {e}{e}{e}{e}{e}{e}\
    \n                   {e}{e}\
    \n                   {e}{e}\
    \n                   {e}{e}\
    \n                   {e}{e}\
    \n{e}{e}         {e}{e}\
    \n  {e}{e}       {e}{e}\
    \n   {e}{e}{e}{e}{e}\
    \n      {e}{e}{e}{e}\
    \n",
    "⁭\
    \n{e}{e}                  {e}{e}\
    \n{e}{e}             {e}{e}\
    \n{e}{e}        {e}{e}\
    \n{e}{e}   {e}{e}\
    \n{e}{e}{e}{e}\
    \n{e}{e} {e}{e}\
    \n{e}{e}     {e}{e}\
    \n{e}{e}         {e}{e}\
    \n{e}{e}              {e}{e}\
    \n{e}{e}                   {e}{e}\
    \n",
    "⁭\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n",
    "⁭\
    \n{e}{e}                                {e}{e}\
    \n{e}{e}{e}                      {e}{e}{e}\
    \n{e}{e}{e}{e}            {e}{e}{e}{e}\
    \n{e}{e}    {e}{e}    {e}{e}    {e}{e}\
    \n{e}{e}        {e}{e}{e}         {e}{e}\
    \n{e}{e}             {e}              {e}{e}\
    \n{e}{e}                                {e}{e}\
    \n{e}{e}                                {e}{e}\
    \n{e}{e}                                {e}{e}\
    \n{e}{e}                                {e}{e}\
    \n",
    "⁭\
    \n{e}{e}                           {e}{e}\
    \n{e}{e}{e}                      {e}{e}\
    \n{e}{e}{e}{e}                 {e}{e}\
    \n{e}{e}  {e}{e}               {e}{e}\
    \n{e}{e}     {e}{e}            {e}{e}\
    \n{e}{e}         {e}{e}        {e}{e}\
    \n{e}{e}             {e}{e}    {e}{e}\
    \n{e}{e}                 {e}{e}{e}{e}\
    \n{e}{e}                     {e}{e}{e}\
    \n{e}{e}                           {e}{e}\
    \n",
    "⁭\
    \n           {e}{e}{e}{e}{e}\
    \n     {e}{e}{e}{e}{e}{e}{e}\
    \n   {e}{e}                   {e}{e}\
    \n {e}{e}                       {e}{e}\
    \n{e}{e}                         {e}{e}\
    \n{e}{e}                         {e}{e}\
    \n {e}{e}                       {e}{e}\
    \n   {e}{e}                   {e}{e}\
    \n      {e}{e}{e}{e}{e}{e}{e}\
    \n            {e}{e}{e}{e}{e}\
    \n",
    "\
    \nㅤ       {e}{e}      {e}{e}\
    \n\
    \n           {e}{e}{e}{e}{e}\
    \n     {e}{e}{e}{e}{e}{e}{e}\
    \n   {e}{e}                   {e}{e}\
    \n {e}{e}                       {e}{e}\
    \n{e}{e}                         {e}{e}\
    \n{e}{e}                         {e}{e}\
    \n {e}{e}                       {e}{e}\
    \n   {e}{e}                   {e}{e}\
    \n      {e}{e}{e}{e}{e}{e}{e}\
    \n            {e}{e}{e}{e}{e}\
    \n",
    "⁭\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}                     {e}{e}\
    \n{e}{e}                     {e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n",
    "⁭\
    \n           {e}{e}{e}{e}{e}\
    \n      {e}{e}{e}{e}{e}{e}{e}\
    \n   {e}{e}                    {e}{e}\
    \n {e}{e}                        {e}{e}\
    \n{e}{e}                           {e}{e}\
    \n{e}{e}              {e}{e}     {e}{e}\
    \n {e}{e}               {e}{e} {e}{e}\
    \n   {e}{e}                   {e}{e}\
    \n      {e}{e}{e}{e}{e}{e}{e}{e}\
    \n           {e}{e}{e}{e}{e}   {e}{e}\
    \n",
    "⁭\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}                     {e}{e}\
    \n{e}{e}                     {e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}    {e}{e}\
    \n{e}{e}         {e}{e}\
    \n{e}{e}              {e}{e}\
    \n{e}{e}                  {e}{e}\
    \n",
    "⁭\
    \n       {e}{e}{e}{e}{e}\
    \n  {e}{e}{e}{e}{e}{e}{e}\
    \n  {e}{e}                 {e}{e}\
    \n{e}{e}\
    \n  {e}{e}{e}{e}{e}{e}\
    \n      {e}{e}{e}{e}{e}{e}\
    \n                            {e}{e}\
    \n{e}{e}                 {e}{e}\
    \n  {e}{e}{e}{e}{e}{e}{e}\
    \n       {e}{e}{e}{e}{e}\
    \n",
    "⁭\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}\
    \n               {e}{e}\
    \n               {e}{e}\
    \n               {e}{e}\
    \n               {e}{e}\
    \n               {e}{e}\
    \n               {e}{e}\
    \n               {e}{e}\
    \n",
    "⁭\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n  {e}{e}                  {e}{e}\
    \n      {e}{e}{e}{e}{e}{e}\
    \n            {e}{e}{e}{e}\
    \n",
    "⁭\
    \n{e}{e}                      {e}{e}\
    \n\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n{e}{e}                      {e}{e}\
    \n  {e}{e}                  {e}{e}\
    \n      {e}{e}{e}{e}{e}{e}\
    \n            {e}{e}{e}{e}\
    \n",
    "⁭\
    \n{e}{e}                              {e}{e}\
    \n  {e}{e}                          {e}{e}\
    \n    {e}{e}                      {e}{e}\
    \n      {e}{e}                  {e}{e}\
    \n         {e}{e}              {e}{e}\
    \n           {e}{e}         {e}{e}\
    \n             {e}{e}     {e}{e}\
    \n               {e}{e} {e}{e}\
    \n                  {e}{e}{e}\
    \n                       {e}\
    \n",
    "⁭\
    \n{e}{e}                               {e}{e}\
    \n{e}{e}                               {e}{e}\
    \n{e}{e}                               {e}{e}\
    \n{e}{e}                               {e}{e}\
    \n{e}{e}             {e}             {e}{e}\
    \n{e}{e}          {e}{e}           {e}{e}\
    \n{e}{e}       {e}{e}{e}         {e}{e}\
    \n{e}{e}    {e}{e}  {e}{e}     {e}{e}\
    \n {e}{e}{e}{e}        {e}{e}{e}{e}\
    \n    {e}{e}{e}              {e}{e}{e}\
    \n",
    "⁭\
    \n{e}{e}                    {e}{e}\
    \n   {e}{e}              {e}{e}\
    \n      {e}{e}        {e}{e}\
    \n         {e}{e}  {e}{e}\
    \n            {e}{e}{e}\
    \n            {e}{e}{e}\
    \n         {e}{e} {e}{e}\
    \n      {e}{e}       {e}{e}\
    \n   {e}{e}             {e}{e}\
    \n{e}{e}                   {e}{e}\
    \n",
    "⁭\
    \n{e}{e}                    {e}{e}\
    \n   {e}{e}              {e}{e}\
    \n      {e}{e}        {e}{e}\
    \n         {e}{e}  {e}{e}\
    \n            {e}{e}{e}\
    \n              {e}{e}\
    \n              {e}{e}\
    \n              {e}{e}\
    \n              {e}{e}\
    \n              {e}{e}\
    \n",
    "⁭\
    \n {e}{e}{e}{e}{e}{e}{e}\
    \n {e}{e}{e}{e}{e}{e}{e}\
    \n                       {e}{e}\
    \n                   {e}{e}\
    \n               {e}{e}\
    \n           {e}{e}\
    \n       {e}{e}\
    \n   {e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n",
    "⁭\
    \n\
    \n⁭\
    \n\
    \n⁭\
    \n\
    \n",
    "⁭\
    \n       {e}{e}{e}{e}\
    \n   {e}{e}{e}{e}{e}{e}\
    \n{e}{e}               {e}{e}\
    \n{e}{e}               {e}{e}\
    \n{e}{e}               {e}{e}\
    \n{e}{e}               {e}{e}\
    \n{e}{e}               {e}{e}\
    \n{e}{e}               {e}{e}\
    \n   {e}{e}{e}{e}{e}{e}\
    \n        {e}{e}{e}{e}\
    \n",
    "⁭\
    \n          {e}{e}\
    \n     {e}{e}{e}\
    \n{e}{e} {e}{e}\
    \n           {e}{e}\
    \n           {e}{e}\
    \n           {e}{e}\
    \n           {e}{e}\
    \n           {e}{e}\
    \n      {e}{e}{e}{e}\
    \n      {e}{e}{e}{e}\
    \n",
    "⁭\
    \n    {e}{e}{e}{e}{e}\
    \n  {e}{e}{e}{e}{e}{e}\
    \n{e}{e}          {e}{e}\
    \n                {e}{e}\
    \n             {e}{e}\
    \n          {e}{e}\
    \n       {e}{e}\
    \n    {e}{e}\
    \n  {e}{e}{e}{e}{e}{e}\
    \n  {e}{e}{e}{e}{e}{e}\
    \n",
    "⁭\
    \n     {e}{e}{e}{e}\
    \n  {e}{e}{e}{e}{e}\
    \n{e}{e}         {e}{e}\
    \n                   {e}{e}\
    \n            {e}{e}{e}\
    \n            {e}{e}{e}\
    \n                   {e}{e}\
    \n{e}{e}         {e}{e}\
    \n  {e}{e}{e}{e}{e}\
    \n     {e}{e}{e}{e}\
    \n",
    "⁭\
    \n                         {e}{e}\
    \n                    {e}{e}{e}\
    \n              {e}{e} {e}{e}\
    \n          {e}{e}     {e}{e}\
    \n     {e}{e}          {e}{e}\
    \n{e}{e}               {e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}{e}{e}\
    \n                         {e}{e}\
    \n                         {e}{e}\
    \n",
    "⁭\
    \n{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}\
    \n{e}{e}\
    \n {e}{e}{e}{e}{e}\
    \n   {e}{e}{e}{e}{e}\
    \n                    {e}{e}\
    \n                    {e}{e}\
    \n{e}{e}          {e}{e}\
    \n  {e}{e}{e}{e}{e}\
    \n     {e}{e}{e}{e}\
    \n",
    "⁭\
    \n        {e}{e}{e}{e}\
    \n    {e}{e}{e}{e}{e}\
    \n{e}{e}\
    \n{e}{e}\
    \n{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}               {e}{e}\
    \n{e}{e}               {e}{e}\
    \n    {e}{e}{e}{e}{e}{e}\
    \n        {e}{e}{e}{e}\
    \n",
    "⁭\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n{e}{e}{e}{e}{e}{e}{e}\
    \n                      {e}{e}\
    \n                     {e}{e}\
    \n                   {e}{e}\
    \n                 {e}{e}\
    \n               {e}{e}\
    \n             {e}{e}\
    \n           {e}{e}\
    \n         {e}{e}\
    \n",
    "⁭\
    \n        {e}{e}{e}{e}\
    \n   {e}{e}{e}{e}{e}{e}\
    \n{e}{e}               {e}{e}\
    \n{e}{e}               {e}{e}\
    \n   {e}{e}{e}{e}{e}{e}\
    \n   {e}{e}{e}{e}{e}{e}\
    \n{e}{e}               {e}{e}\
    \n{e}{e}               {e}{e}\
    \n   {e}{e}{e}{e}{e}{e}\
    \n        {e}{e}{e}{e}\
    \n",
    "⁭\
    \n        {e}{e}{e}{e}\
    \n   {e}{e}{e}{e}{e}{e}\
    \n{e}{e}               {e}{e}\
    \n{e}{e}               {e}{e}\
    \n {e}{e}{e}{e}{e}{e}{e}\
    \n      {e}{e}{e}{e}{e}{e}\
    \n                         {e}{e}\
    \n                        {e}{e}\
    \n  {e}{e}{e}{e}{e}{e}\
    \n       {e}{e}{e}{e}\
    \n",
]


@asena(outgoing=True, pattern=r"^.emoji(?:\s|$)([\s\S]*)")
async def emoji(e):
    textx = await e.get_reply_message()
    message = e.pattern_match.group(1).strip()

    if message:
        pass

    elif textx:
        message = textx.text
    
    else:
        await e.edit(f"**👋 Bana bir metin ver!\
            \n\nℹ Örneğin böyle yazmalısın:**\
            \n➡ `.emoji selam`")
        return
    
    try:
        final = "  ".join(message).lower()
        for index in final:
            if index in basemojitext:
                text = emojis[basemojitext.index(index)]
                final = final.replace(index, text)
        await e.edit(final)
    
    except:
        await e.edit(f"**❎ Bu metin çok büyük!**")


@asena(outgoing=True, pattern=r"^.cmoji(?:\s|$)([\s\S]*)")
async def cmoji(c):
    message = c.pattern_match.group(1).strip()

    if message:
        try:
            emoji, message = message.split(" ", 1)

        except:
            await c.edit(f"**👋 Bana bir emoji ve metin ver!\
                \n\nℹ Örneğin böyle yazmalısın:**\
                \n➡ `.cmoji 👋 selam`")
            return

    else:
        if len(message) < 1:
            await c.edit(f"**👋 Bana bir emoji ve metin ver!\
                \n\nℹ Örneğin böyle yazmalısın:**\
                \n➡ `.cmoji 👋 selam`")
            return

    try:
        final = "  ".join(message).lower()
        for index in final:
            if index in basemojitext:
                text = cmojis[basemojitext.index(index)].format(e=emoji)
                final = final.replace(
                    index, text
                )
        await c.edit(final)
    
    except:
        await c.edit(f"**❎ Bu metin çok büyük!**")


CmdHelp('emojify').add_command(
    'emoji', '<metin/yanıt>', 'Kalp emojiler ile bir şeyler yazın!', 'emoji selam'
).add_command(
    'cmoji', '<emoji> <metin>', 'İstediğiniz emoji veya karakter ile bir şeyler yazın!', 'cmoji 👋 selam'
).add_info('❤ ile @mutlcc tarafından yapıldı!').add()
