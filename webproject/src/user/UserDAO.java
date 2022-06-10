package user;

import java.io.Console;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserDAO {
	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;
	public UserDAO() {
		try {
			System.out.println("DB 접속 시작...");
			String dbURL = "jdbc:mysql://localhost:3306/web_programming?characterEncoding=UTF-8&serverTimezone=UTC&useSSL=false";
			String dbID = "root";
			String dbPassword = "qkrwodus12";
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(dbURL, dbID, dbPassword);
		} catch (Exception e) {
			System.out.println("실패");
			e.printStackTrace();
		}
	}

	public int login(String userEmail, String userPassword) {
		String SQL = "SELECT password FROM user WHERE email = ?";
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, userEmail);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				if (rs.getString(1).equals(userPassword)) {
					return 1;
				}else
					return 0;
			}
			return -1;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -2;
	}
	public int join(User user) {
		String SQL = "INSERT INTO user VALUES (?,?,?,?,?,?,?)";
		try {
			System.out.println(user);
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, user.getUserName());
			pstmt.setString(2, user.getUserEmail());
			pstmt.setString(3, user.getUserPassword());
			pstmt.setString(4, user.getUserDateofBirth());
			pstmt.setString(5, user.getUserGender());
			pstmt.setString(6, user.getUserCompany());
			pstmt.setString(7, user.getUserNumber());
			return pstmt.executeUpdate();
		} catch (Exception e) {
			System.out.println("4");
			e.printStackTrace();
		}
		return -1;
	}
}