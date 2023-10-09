// Docstringを返すプロンプト
const addDocstringPrompt =
  '[PromptApp] Generate Docstring \n\
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
The sentence following "input" is the target sentence. \n\
== input == \n\
';

const addDocstringPrompt2 = 
'[PromptApp] Generate Docstring \n\
You are the agent that creates the Docstring for a given program. \n\
Please create the docstring in a format appropriate for the program language of the given program. \n\
You must provide the name, type, and a brief description of the function\'s arguments and return value. \n\
You must return only the docstring you created.  \n\
This is an example of your answer that if the program language is javascript \n\
\n\
[Your Answer] \n\
/** \n\
 * Processes the clipboard action. \n\
 * \n\
 * @param {Event} event - The event object that triggered the action. \n\
 * @param {string} addPrompt - The prompt to add to the clipboard text. \n\
 * @return {Promise} A promise that resolves when the clipboard action is completed. \n\
 */ \n\
\n\
The sentence following "input" is the target sentence. \n\
== input == \n\
'

// 英語に翻訳するプロンプト (Google翻訳でよくない？)
const translateToEngPrompt =
  '[PromptApp] Translate to English \n\
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
The sentence following "input" is the target sentence. \n\
== input == \n\
';

// 英語に翻訳するプロンプト (Google翻訳でよくない？)
const translateToEngPrompt2 =
  '[PromptApp] Translate to English \n\
\
You are an agent translating to English like DeepL. You are given sentences. \
Your answer is only sentences that translated to English. \n\
\n\
The sentence following "input" is the target sentence. \n\
== input == \n\
';

// 日本語に翻訳するプロンプト (Google翻訳でよくない？)
const translateToJpnPrompt =
  '[PromptApp] Translate to Japanese \n\
\
You are an agent translating to Japanese like DeepL. You are given sentences. \
Your answer is only sentences that translated to Japanese. \n\
\n\
The sentence following "input" is the target sentence. \n\
== input == \n\
';

// コメント文を日本語に翻訳するプロンプト（LLM使わなくてもできそう）
const translateCommentToJpnPrompt =
  '[PromptApp] Translate Comment to Japanese \n\
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
The sentence following "input" is the target sentence. \n\
== input == \n\
';

// コメント文を英語に翻訳するプロンプト（LLM使わなくてもできそう）
const translateCommentToEngPrompt =
  '[PromptApp] Translate Comment to English \n\
\
You are an agent translating and replacing only comment sentence to English. You are given program code. \
\n\
this is an example. \n\
\n\
Example 1 \n\
[Program code] \n\
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
[Your Answer] \n\
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
The sentence following "input" is the target sentence. \n\
== input == \n\
';

// コーディング規則に従って修正するプロンプト
const modifyCordingPrompt =
  '[PromptApp] modify Cording \n\
You are an agent fixing cording. You are given sentences. You only return the modified program code. \
\n\
[Variables] \
CamelCase description. ex.) animation_type -> animationType \
If the type is a bool value, prefix it with one of the following: is(~ is) / can(~ can) / has(~ has) \
ex.) isSpDevice (is SP device), canSubmit (can submit), hasUserId (has user ID) \
Naming for clarity rather than shortness of name, don\'t worry too much about the name being long \
Rely on input completion in editors and such. \
If there is more than one data, such as arrays or objects, variable names should be plural \
ex.) deviceLabels = [\'sp\'[ ], \'pc\'] \
Variables used as indices (counters) in For and While loops should be i, j, k. In this case, use i, j, and k in order from the outermost loop. \
\n\
[Constants] \
All upper case and written in snake case. ex.) layout_type -> LAYOUT_TYPE \
\n\
[Functions] \
Describe in CamelCase. ex.) reset_image_size -> resetImageSize \
Name the function with priority on clarity rather than shortness of name, and don\'t worry too much about the name being long. \
Rely on input completion in editors, etc. \
For functions that return a value, use a name that clearly indicates the value to be returned. Also, the variable that stores the return value should match the function \
ex.) userID = getUserId(userName) \
\n\
The sentence following == input == is the target sentence to modify according to the above coding rules. You only return the modified program code.\n\
== input == \n\
'

// プログラムコードから，Mermaid記法のフローチャートを生成するプロンプト
const genMermaidFlowchartPrompt =
  '[PromptApp] Generate Mermaid Flowchart \n\
\
You are an agent generating Mermaid format flowchart. You are given program code. \
Your answer is mermaid format flowchart. \n\
\n\
this is an example. \n\
\n\
Example 1 \n\
[Program code] \n\
i = 0 \n\
\n\
while i < 30: \n\
    i += 1 \n\
    \n\
    is_multiple_of_3 = i % 3 == 0 \n\
    is_multiple_of_5 = i % 5 == 0 \n\
    is_multiple_of_15 = i % 15 == 0 \n\
    \n\
    if is_multiple_of_15: \n\
        print("FizzBuzz") \n\
    elif is_multiple_of_3: \n\
        print("Fizz") \n\
    elif is_multiple_of_5: \n\
        print("Buzz") \n\
    else: \n\
        print(i) \n\
\n\
[Your Answer] \n\
flowchart TD \n\
  A[Initialize variable i to 0] \n\
  B[Increment i by 1] \n\
  C{Multiple of 3?} \n\
  D{Multiple of 5?} \n\
  E{Multiple of 15?} \n\
  F[Display Fizz] \n\
  G[Display Buzz] \n\
  H[Display FizzBuzz] \n\
  I[Display the number as is] \n\
  J[i is less than 30] \n\
  \n\
  A --> B \n\
  B --> E \n\
  E -->|Yes| H \n\
  E -->|No| C \n\
  C -->|Yes| F \n\
  C -->|No| D \n\
  D -->|Yes| G \n\
  D -->|No| I \n\
  F --> J \n\
  G --> J \n\
  H --> J \n\
  I --> J \n\
  J -->|Yes| B \n\
  J -->|No| Z[End] \n\
\n\
No matter what programming language you are given, read the logic and create correct flowcharts. \n\
You have to issue only Mermaid format flowchart. \n\
The sentence following "input" is the target sentence. \n\
== input == \n\
';

// 状態遷移表から，Mermaid記法の状態遷移図を生成するプロンプト（LLM使わなくてもできそう）
const genStateFlowchartPrompt =
  '[PromptApp] Generate State Flowchart \n\
\
You are an agent generating State format flowchart. You are given state flow matrix. \
Your answer is Mermaid format state flowchart. \n\
\n\
this is an example. \n\
\n\
Example 1 \n\
- stateA stateB stateC\n\
eventX - stateC stateA\n\
eventY stateB - -\n\
eventZ stateC - -\n\
\n\
[Your Answer] \n\
stateDiagram-v2\n\
    [*] --> stateA\n\
    stateA --> stateB : eventY\n\
    stateA --> stateC : eventZ\n\
    stateB --> stateC : eventX\n\
    stateC --> stateA : eventX\n\
\n\
You have to issue only Mermaid format flowchart. \n\
The sentence following "input" is the target sentence. \n\
== input == \n\
'

// 任意のプログラミング言語をC言語に変換するプロンプト
const convertToCcodePrompt =
  '[PromptApp] Convert to C code \n\
\
You are an agent converting to C code. You are given program code. \
Your answer is only C code. \n\
The sentence following "input" is the target sentence. \n\
== input == \n\
'

document.getElementById("addDocstringBtn").addEventListener("click", async (event) => {
    await processClipboardAction(event, addDocstringPrompt2);
});

document.getElementById("modifyCordingBtn").addEventListener("click", async (event) => {
    await processClipboardAction(event, modifyCordingPrompt);
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

document.getElementById("translateCommentToEngBtn").addEventListener("click", async (event) => {
    await processClipboardAction(event, translateCommentToEngPrompt);
});

document.getElementById("genMermaidFlowchartBtn").addEventListener("click", async (event) => {
    await processClipboardAction(event, genMermaidFlowchartPrompt);
});

document.getElementById("convertToCcodeBtn").addEventListener("click", async (event) => {
    await processClipboardAction(event, convertToCcodePrompt);
});

// document.getElementById("genMermaidStateFlowchartBtn").addEventListener("click", async (event) => {
//     await processClipboardAction(event, genStateFlowchartPrompt);
// });


/**
 * Processes the clipboard action.
 *
 * @param {Event} event - The event object that triggered the action.
 * @param {string} addPrompt - The prompt to add to the clipboard text.
 * @return {Promise} A promise that resolves when the clipboard action is completed.
 */
async function processClipboardAction(event, addPrompt) {
    navigator.clipboard.readText().then((text) => {
        console.log("readText")
        console.log(text)

        // [PromptApp]から始まっている場合，プロンプトを削除する．
        if (text.startsWith('[PromptApp]')) {
            text = removePrompt(text);
        }

        console.log("Gen modified Text")
        var modifiedText = addPrompt + text;

        console.log("writeText");
        console.log(modifiedText.slice( 0, 10 ) + '...');

        // テキストをクリップボードに書き込むためのテキストエリアを作成
        var textArea = document.createElement("textarea");
        textArea.value = modifiedText;
        document.body.appendChild(textArea);

        // テキストエリアを選択し、コピー操作を実行
        textArea.select();
        document.execCommand("copy");

        // テキストエリアを削除
        document.body.removeChild(textArea);

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
    },
    (err) => {
      console.error("クリップボードの読み込みに失敗しました:", err);
    });
}

function removePrompt(inputString) {
    const startIndex = inputString.indexOf("[PromptApp]");
    if (startIndex !== -1) {
        // "[PromptApp]"が見つかった場合、"== input =="の位置を検索
        const endIndex = inputString.indexOf("== input ==", startIndex);
        if (endIndex !== -1) {
            // "== input =="が見つかった場合、該当部分を削除して返す
            const prefix = inputString.substring(0, startIndex);
            const suffix = inputString.substring(endIndex + 14); // "End"の3文字分を削除
            return prefix + suffix;
        }
    }
    // "Start"から始まっていない場合や"End"が見つからない場合、元の文字列をそのまま返す
    return inputString;
}
