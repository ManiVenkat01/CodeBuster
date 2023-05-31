public class Student {
    private String name;
    public String getName() {
        return name;
    }

    public void setName(String newName) {
        name = newName;
    }

    public static void main(String[] args) {
        Student student = new Student();
        student.setName("Mani Kandan Venkataram");
        System.out.println(student.getName());

        student.setName("Srikar");
        System.out.println(student.getName());

    }
}
