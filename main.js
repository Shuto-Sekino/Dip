const addDocstringPrompt =
  '【PromptApp】Generate Docstring \n\
\
You are an agent generating docstring of program code. You are given program code.\
if the program code is a function, you have to issue the description of arguments and return value. \n\
this is the docstring format \n\
\
""" \n\
<Objective of this code> \n\
\n\
param <param name> (<type of param>) : <description of arguments> \n\
\n\
return (<type of return value>) :  <description of return value> \n\
""" \n\
\n\
these are some examples. \n\
\n\
Example 1 \n\
[Program code] \n\
def type(self, id, text): \n\
self.click(id) \n\
self.page.keyboard.type(text) \n\
\n\
[Your Answer] \n\
""" \n\
Clicks on an element with the given ID and types the specified text. \n\
\n\
:param id (str): The ID of the element to click on. \n\
\n\
:param text (str): The text to type. \n\
"""  \n\
\n\
Example 2 \n\
[Program code] \n\
def go_to_page(self, url): \n\
self.page.goto(url=url if "://" in url else "http://" + url) \n\
self.client = self.page.context.new_cdp_session(self.page) \n\
self.page_element_buffer = {} \n\
\n\
[Your Answer] \n\
""" \n\
Go to the specified URL in the browser. \n\
\n\
:param url (str): The URL to navigate to. \n\
"""  \n\
\n\
this is the program code of which you have to issue docstring. \n\
';

const translateToEngPrompt =
  '【PromptApp】Translate to English \n\
\
You are an agent translating to English. You are given sentences.\
these are some examples. \n\
\n\
Example 1 \n\
[Given sentence] \n\
私たちは, たとえ新しい知識がまだ体系づけられてはいない環境であっても, 新しい知識を探し出して吸収する能力を, 個々人のなかに発達させることに集中しなけばならない。\
\n\
[Your Answer] \n\
We must concentrate on developing in each individual the ability to search out and absorb new knowledge, even in circumstances where it is not already organized.\
\n\
Example 2 \n\
[Given sentence] \n\
私達はインターネットですばやくたくさんの情報を手に入れることが出来る。\
\n\
[Your Answer] \n\
We can get a lot of information quickly on the internet.\
\n\
this is the sentences that you have to translate. \n\
';

const translateToEngPrompt2 =
  '【PromptApp】Translate to English \n\
\
You are an agent translating to English like DeepL. You are given sentences. \
Your answer is only sentences that translated to English. \n\
\n\
These are sentences that you have to translate. \n\
';

const translateToJpnPrompt =
  '【PromptApp】Translate to Japanese \n\
\
You are an agent translating to Japanese like DeepL. You are given sentences. \
Your answer is only sentences that translated to Japanese. \n\
\n\
These are sentences that you have to translate. \n\
';

const translateCommentToJpnPrompt =
  '【PromptApp】Translate Comment to Japanese \n\
\
You are an agent translating and replacing only comment sentence to Japanese. You are given program code. \
\n\
this is an example. \n\
\n\
Example 1 \n\
[Program code] \n\
import csv \n\
# Open the CSV file \n\
with open(\'example.csv\', \'r\') as file: \n\
    # Create a CSV DictReader object \n\
    csv_reader = csv.DictReader(file) \n\
    \n\
    # Iterate through each row in the CSV file \n\
    for row in csv_reader: \n\
        # Access data using column names \n\
        print(row[\'column_name\']) \n\
\n\
[Your Answer] \n\
import csv \n\
# CSVファイルを開く \n\
with open(\'example.csv\', \'r\') as file: \n\
    # CSVリーダーオブジェクトを作成する \n\
    csv_reader = csv.DictReader(file) \n\
    \n\
    # CSVファイル内の各行について繰り返す \n\
    for row in csv_reader: \n\
        # カラム名を使用して，データにアクセスする \n\
        print(row[\'column_name\']) \n\
\n\
this is the program code of which you have to deal with. \n\
';


document.getElementById("addDocstringBtn").addEventListener("click", async (event) => {
    await processClipboardAction(event, addDocstringPrompt);
});
  
document.getElementById("translateToEngBtn").addEventListener("click", async (event) => {
    await processClipboardAction(event, translateToEngPrompt2);
});

document.getElementById("translateToJpnBtn").addEventListener("click", async (event) => {
    await processClipboardAction(event, translateToJpnPrompt);
});

document.getElementById("translateCommentToJpnBtn").addEventListener("click", async (event) => {
    await processClipboardAction(event, translateCommentToJpnPrompt);
});

async function processClipboardAction(event, addAction) {
    try {
      const text = await navigator.clipboard.readText();
      if (text.startsWith('【PromptApp】')) {
        console.log("Don't need to add prompt.");
        alert("Don't need to add prompt.");
      } else {
        var modifiedText = addAction + text;
        await navigator.clipboard.writeText(modifiedText);

        // 新しい要素を作成
        var successMessage = document.createElement("div");
        successMessage.className = 'success-message';
        successMessage.innerText = "Success !";
        successMessage.className = "success-message"; // スタイルを適用するためのクラスを追加

        // クリックした要素の直後に新しい要素を挿入
        event.target.insertAdjacentElement("afterend", successMessage);

        // 1秒後に新しい要素を削除
        setTimeout(function () {
            successMessage.remove();
        }, 1000);
      }
    } catch (err) {
      console.error("クリップボードの処理に失敗しました:", err);
    }
}
