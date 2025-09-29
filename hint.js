//�`�F�b�N�{�b�N�X�̗v�f���擾
const checkboxes = document.querySelectorAll(".checkbox");

//����
console.log(checkboxes[0]);
//checkbox�N���X�������ŏ��̗v�f
//���܂�<input type="checkbox" value="apple" class="checkbox">���擾�ł���

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    //velue�Ƃ����ϐ��ɁA�擾�����i�܂�`�F�b�N���ꂽ�jinput�^�O��value�l��������񂲂Ƀ`�F�b�N�����ꂽ��A�uapple�v����������
    const value = checkbox.value;
    //correspondingDiv�Ƃ����ϐ��ɁA�ϐ�value�Ɠ����N���X�������v�f���擾���đ������񂲂Ƀ`�F�b�N������遨apple��value�ɑ����.apple�̂����v�f���擾
    const correspondingDiv = document.querySelector(`.${value}`);
    
    if(checkbox.checked) {
      //�`�F�b�N�{�b�N�X���I���̎�
      correspondingDiv.classList.add("selected");
    } else {
      //�`�F�b�N�{�b�N�X���I�t�̎�
     correspondingDiv.classList.remove("selected");
    }
  });
});



