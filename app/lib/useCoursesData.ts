import { useTranslations } from "next-intl";

export function useCoursesData() {
    const tCourses = useTranslations("Courses");
    const t = useTranslations("CoursesPage");

    const coursesData = [
        {
            id: 1,
            title: tCourses("course1Title"),
            description: tCourses("course1Desc"),
            rating: "4.9",
            reviews: "1.2k",
            level: "Advanced",
            displayLevel: tCourses("course1Level"),
            accent: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
            featured: true
        },
        {
            id: 2,
            title: tCourses("course2Title"),
            description: tCourses("course2Desc"),
            rating: "4.8",
            reviews: "850",
            level: "Intermediate",
            displayLevel: tCourses("course2Level"),
            accent: "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
            featured: true
        },
        {
            id: 3,
            title: tCourses("course4Title"),
            description: tCourses("course4Desc"),
            rating: "4.8",
            reviews: "2.1k",
            level: "Intermediate",
            displayLevel: tCourses("course4Level"),
            accent: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
            featured: true
        },
        {
            id: 4,
            title: tCourses("course3Title"),
            description: tCourses("course3Desc"),
            rating: "4.9",
            reviews: "620",
            level: "All",
            displayLevel: tCourses("course3Level"),
            accent: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
            featured: false
        },
        {
            id: 5,
            title: t("course5Title"),
            description: t("course5Desc"),
            rating: "4.7",
            reviews: "930",
            level: "Beginner",
            displayLevel: t("course5Level"),
            accent: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
            featured: false
        },
        {
            id: 6,
            title: t("course6Title"),
            description: t("course6Desc"),
            rating: "4.8",
            reviews: "450",
            level: "Intermediate",
            displayLevel: t("course6Level"),
            accent: "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
            featured: false
        },
    ];

    return coursesData;
}
