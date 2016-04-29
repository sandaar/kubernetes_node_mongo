import json

with open('words.json', 'w') as file_to_write:
    with open('/usr/share/dict/words', 'r') as f:
        count = 0
        for line in f:
            for word in line.split():
                if "'" not in word:
                    if len(word) == 3 or len(word) == 4:
                        count += 1
                        word_dict = dict(word=word, length=len(word))
                        json.dump(word_dict, file_to_write, indent=2)
        print(count)
