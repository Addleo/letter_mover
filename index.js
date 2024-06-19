function move(){
    const alphabet_pos = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const test_case = document.getElementById("word").value.toString();
    const letters = test_case.toLowerCase().split("");
    moved_word = "";
    for(let i = 0; i < letters.length; i++){
        const current_pos = alphabet_pos.indexOf(letters[i]);
        moved_word += alphabet_pos[current_pos+1];
    }
    const answer = "Result : "+moved_word;
    document.getElementById("result").innerHTML = answer;
}